const jwt = require('jsonwebtoken');
const fs = require('fs');

const middleware = {

   // verify token
   verifyToken: (req, res, next) => {
      // get user token
      const token = req.headers.token;
      if (token) {
         const accessToken = token.split(" ")[1] // get token
         jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
            if (err) {
               res.status(403).json("Token is not valid")
            }
            req.user = user
            next()
         })
      } else {
         res.status(401).json("You're not authenticated")
      }
   },

   // admin
   verifyTokenAdmin: (req, res, next) => {
      middleware.verifyToken(req, res, () => {
         if (req.user.id === req.params.id || req.user.isAdmin) { // delete yourself or admin can delete
            next()
         } else {
            res.status(403).json("Not allowed to delete user")
         }
      })
   },

   // loginJWT
   verifyLogin: async (req, res, next) => {
      if (req.body.username === "usertest" && req.body.password === "123456789") {
         const cert = fs.readFileSync('./jwt/jwtRS256.key')
         const jwtPayload = { username: req.body.username }
         const token = await jwt.sign(jwtPayload, cert, { algorithm: 'RS256', expiresIn: '30s' })
         res.status(200).send(token)
      } else {
         res.status(400).send("Bad Request!")
      }
   },

   // authorization
   verifyAuthorization: async (req, res, next) => {
      const token = req.headers.token
      if (token) {
         const cert = fs.readFileSync('./jwt/jwtRS256.key.pub')
         const verifiedData = await jwt.verify(token, cert, { ignoreExpiration: false }, (err, decoded) => {
            console.log(err)
            console.log(decoded)
            if (err) {
               return { isSuccess: false, err: err }
            } else {
               return { isSuccess: true, err: null }
            }
            // verify success
         })
         if (verifiedData.isSuccess) {
            next()
         } else {
            return res.status(403).send("forbidden")
         }
      } else {
         return res.status(403).send("forbidden")
      }
   },
}

module.exports = middleware