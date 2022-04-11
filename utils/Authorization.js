const responseStatus = require('../constants/responseStatus')

module.exports = {
   checkAdmin: async () => {

   },
   checkUser: async (req, res, next) => {
      let userToken = req.headers.token
      if (!userToken) return res.json(responseStatus.UNAUTHORIZED)
      return res.json(responseStatus.OK)
   },
   checkPermission: async () => {

   },
}