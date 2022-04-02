import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
import colorRoutes from "./routes/color.js";
import policyRoutes from "./routes/policy.js";
import sizeRoutes from "./routes/size.js";
import sliderRoutes from "./routes/slider.js";


import bodyParser from "body-parser";
import mongoose from "mongoose";

const cors = require('cors') // Import cors

// Begin Cors Setup
var corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors(corsOptions))


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
app.use("/api", categoryRoutes);
app.use("/api", colorRoutes);
app.use("/api", policyRoutes);
app.use("/api", sizeRoutes);
app.use("/api", sliderRoutes);


app.listen(port, () => {
   console.log("Server listening on port " + port);
});
