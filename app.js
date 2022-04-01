import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import bodyParser from "body-parser";

// Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

// Routes
app.use("/api", productRoutes);

app.listen(port, () => {
   console.log("Server listening on port " + port);
});
