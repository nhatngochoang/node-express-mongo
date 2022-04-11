import MongoDatabase from './MongoDatabase.js'
const { mongoDB, responseStatus } = require('../../constants')
const objectID = require('mongodb').ObjectID

module.exports = {
   findAll: async () => {
      // Connect the client to the server
      await MongoDatabase.connect();
      // Establish and verify connection
      let db = await MongoDatabase.db()
      if (!db) return res.status(401).json("DB not connected")
      else {
         const collection = db.collection(mongoDB.MONGO_COLLECTION_USERS)
         let query = {}
         let result = await collection.find(query).toArray()
         if (result) {
            return Object.assign({}, responseStatus.SUCCESS, { data: result })
         } else {
            responseStatus.BAD_REQUEST
         }
      }
   },
   findOne: async (_id) => {
      // Connect the client to the server
      await MongoDatabase.connect();
      // Establish and verify connection
      let db = await MongoDatabase.db()
      if (!db) return res.status(401).json("DB not connected")
      else {
         const collection = db.collection(mongoDB.MONGO_COLLECTION_USERS)
         let query = { _id: objectID(_id) }
         let result = await collection.findOne(query)
         if (result) {
            return Object.assign({}, responseStatus.OK, { data: result })
         } else {
            responseStatus.BAD_REQUEST
         }
      }
   }
}