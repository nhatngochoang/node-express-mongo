import User from "../models/user.js";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let refreshTokens = [];

const authController = {
   // REGISTER
   registerUser: async (req, res) => {
      try {
         const salt = await bcrypt.genSalt(10);
         const hashed = await bcrypt.hash(req.body.password, salt);

         //Create new user
         const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed,
         });

         //Save to DB
         const user = await newUser.save();
         res.status(200).json(user);
      } catch (err) {
         res.status(500).json(err);
      }
   },

   //GENERATE ACCESS TOKEN
   generateAccessToken: (user) => {
      return jwt.sign({
         id: user.id,
         isAdmin: user.isAdmin
      },
         process.env.JWT_ACCESS_KEY,
         { expiresIn: "30d" }
      )
   },

   //GENERATE REFRESH TOKEN
   generateRefreshToken: (user) => {
      return jwt.sign({
         id: user.id,
         isAdmin: user.isAdmin
      },
         process.env.JWT_REFRESH_KEY,
         { expiresIn: "30d" }
      )
   },

   //LOGIN
   loginUser: async (req, res) => {
      try {
         // validate username
         const user = await User.findOne({ username: req.body.username });
         if (!user) {
            return res.status(404).json("Wrong username!");
         }
         // validate password
         const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
         );
         if (!validPassword) {
            return res.status(404).json("Wrong password");
         }
         // login success 
         if (user && validPassword) {
            const accessToken = authController.generateAccessToken(user)

            const refreshToken = authController.generateRefreshToken(user)

            refreshTokens.push(refreshToken)

            res.cookie("refreshToken", refreshToken, {
               httpOnly: true,
               secure: false, // set true when deploy
               path: "/",
               sameSite: "strict", // only req from current site
            });

            const { password, ...others } = user._doc; // not include password in response
            res.status(200).json({ ...others, accessToken })
            // const accessToken = authController.generateAccessToken(user);
            // const refreshToken = authController.generateRefreshToken(user);
            // refreshTokens.push(refreshToken);
            // res.cookie("refreshToken", refreshToken, {
            //    httpOnly: true,
            //    secure: false,
            //    path: "/",
            //    sameSite: "strict",
            // });
            // const { password, ...others } = user._doc;
            // res.status(200).json({ ...others, accessToken });
         }
      } catch (err) {
         res.status(500).json(err);
      }
   },

   // REFRESH TOKEN
   refreshToken: async (req, res) => {
      try {
         // get refresh token from user
         const refreshToken = req.cookies.refreshToken

         if (!refreshToken) return res.status(401).json("You're not authenticated")
         //???? redis ????? c??c refresh token kh??c nhau 
         if (!refreshTokens.includes(refreshToken))
            return res.status(403).json("Refresh token is not valid")
         jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) return res.status(401).json(err)

            refreshTokens = refreshTokens.filter(token => token !== refreshToken) // remove old token

            // create 2 new tokens
            const newAccessToken = authController.generateAccessToken(user)
            const newRefreshToken = authController.generateRefreshToken(user)
            refreshTokens.push(newRefreshToken) // add new token
            res.cookie("refreshToken", newRefreshToken, {
               httpOnly: true,
               secure: false,
               path: "/",
               sameSite: "strict",
            });
            res.status(200).json({ accessToken: newAccessToken }) // use this new access token
         })
      } catch (err) {
         console.log(err);
      }
   },

   // LOG OUT
   logoutUser: async (req, res) => {
      try {
         res.clearCookie("refreshToken");
         refreshTokens = []
         res.status(200).json("Logged out successfully!");
         // delete access token in REDUX
      } catch (error) {
         res.status(401).json("Log out failed!")
      }
   }
}
module.exports = authController