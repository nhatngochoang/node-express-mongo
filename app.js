import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
import colorRoutes from "./routes/color.js";
import policyRoutes from "./routes/policy.js";
import sizeRoutes from "./routes/size.js";
import sliderRoutes from "./routes/slider.js";
import orderRoutes from "./routes/order.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

import allRoutes from './routes'

import bodyParser from "body-parser";
import session from 'express-session'
import mongoose from "mongoose";
import path from 'path'
import { API_PATH } from "./constants/routeLink.js";

const cors = require('cors') // Import cors
const cookieParser = require('cookie-parser')

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
app.use(cookieParser('secret'))
app.use(express.json())

// Session middleware setup
app.use(session({
   secure: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   cookie: {
      secure: false // true ➡ https
   }
}))
/*
app.use(express.cookieSession({
   key: "mysite.sid.uid.whatever",
   secret: process.env["SESSION_SECRET"],
   cookie: {
     maxAge: 2678400000 // 31 days
   },
 }));
*/

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
app.use(API_PATH, productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", colorRoutes);
app.use("/api", policyRoutes);
app.use("/api", sizeRoutes);
app.use("/api", sliderRoutes);
app.use("/api", orderRoutes);
app.use("/api", userRoutes);

app.use("", allRoutes);


// AUTHENTICATION 💣 Signup, Login
app.use("/api/auth", authRoutes)
// AUTHORIZATION  💣 phân quyền

// PUBLIC
app.use('/public', express.static(path.join(__dirname, '/public')))

app.listen(port, () => {
   console.log("Server listening on port " + port);
});

//create session
app.get('/demo', (req, res) => {
   if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>' + req.session.views + '</p>')
      res.end()
   } else {
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
   }
})

//delete session
app.get('/delete', (req, res) => {
   req.session.destroy()
   res.json('Delete session')
})



