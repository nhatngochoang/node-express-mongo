const jwt = require('jsonwebtoken');

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
   }
}

module.exports = middleware