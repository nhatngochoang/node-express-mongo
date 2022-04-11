const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://nhatocschos:NesU8m9MJijyReK@cluster0.lhefr.mongodb.net/ECOMMERCESHOP?retryWrites=true&w=majority'
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
   try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server<TEST>");
      return client
   }
   finally {
      // Ensures that the client will close when you finish/error
      await client.close();
   }
}
run().catch(console.dir);

export default client