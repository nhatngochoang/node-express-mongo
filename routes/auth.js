import express from "express";
import authController from "../controllers/auth.js";
import { create, get } from "../controllers/category.js";
const router = express.Router();

// register
router.post("/register", authController.registerUser);


module.exports = router;
