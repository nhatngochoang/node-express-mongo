const users = require('../../../db/mongoDB/users.js')

const id = async (_id) => {
   const idUser = await users.findOne(_id)
   return idUser
}

module.exports = id