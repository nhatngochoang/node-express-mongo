import User from "../models/user.js";
const bcrypt = require('bcrypt')

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
         // pass 
         if (user && validPassword) {
            res.status(200).json(user)
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
   }
}

module.exports = authController