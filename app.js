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
import { API_PATH, API_PATH_V1 } from "./constants/routeLink.js";

const cors = require('cors') // Import cors
const cookieParser = require('cookie-parser')

const redis = require('redis')
const redisClient = redis.createClient({
   legacyMode: true
});

// async function run() {
//    await redisClient.auth(process.env.REDIS_PASSWORD, () => {
//       console.log('connected')
//    });
//    await redisClient.connect();

//    console.log("Redis connected: ", redisClient.isOpen)

//    // await redisClient.disconnect();
// }

// run();

const redisStore = require('connect-redis')(session)


// Begin Cors Setup
var corsOptions = {
   // origin: 'http://localhost:3000',
   origin: 'https://m2-ecommerce-shop-p27udvmxf-tahn-0102.vercel.app',
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
// app.options('*', cors()) // include before other routes

/*
// Session middleware setup
app.use(session({
   store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
   secure: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: true,
   cookie: {
      secure: false, // true ➡ https
      maxAge: 2678400000 // 31 days
   }
}))
*/

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
app.use(API_PATH_V1, productRoutes);
app.use(API_PATH_V1, categoryRoutes);
app.use(API_PATH_V1, colorRoutes);
app.use("/api", policyRoutes);
app.use(API_PATH_V1, sizeRoutes);
app.use("/api", sliderRoutes);
app.use("/api", orderRoutes);
app.use("/api", userRoutes);

app.use("", allRoutes);


// AUTHENTICATION 💣 Signup, Login
app.use("/api/auth", authRoutes)
// AUTHORIZATION  💣 phân quyền

// PUBLIC
app.use('/public', express.static(path.join(__dirname, '/public')))

// Home
app.use('/', (req, res) => {
   res.json('Homepage')
})


app.listen(port, () => {
   console.log("Server listening on port " + port);
});


// REDIS: https://www.youtube.com/watch?v=J0qp9rTSQOk&list=PLodO7Gi1F7R1GMefX_44suLAaXnaNYMyC&index=22 - min40
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



