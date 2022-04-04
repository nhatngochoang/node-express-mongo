import express from "express";
import authController from "../controllers/auth.js";
const router = express.Router();

// register
router.post("/register", authController.registerUser);

// login
router.post("/login", authController.loginUser);

// refresh
router.post("/refresh", authController.refreshToken);


module.exports = router;
