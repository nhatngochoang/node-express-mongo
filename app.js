import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

// Connection
mongoose
   .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
   })
   .then(() => {
      console.log("Database connected");
   });

mongoose.connection.on("Error", (err) => {
   console.log("Error: " + err.message);
});
// Routes
app.use("/api", productRoutes);

app.listen(port, () => {
   console.log("Server listening on port " + port);
});
