const users = require('../../../db/mongoDB/users.js')

const list = async () => {
   const listUser = await users.findAll()
   return listUser
}

module.exports = list