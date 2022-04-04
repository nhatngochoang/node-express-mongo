import express from "express";
import authController from "../controllers/auth.js";
import middleware from '../middleware/middleware.js'

const router = express.Router();

// register
router.post("/register", authController.registerUser);

// login
router.post("/login", authController.loginUser);

// refresh
router.post("/refresh", authController.refreshToken);

// logout
router.post("/logout", middleware.verifyToken, authController.logoutUser);


module.exports = router;
