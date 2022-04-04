import express from "express";
import userController from "../controllers/user.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

// get all
router.get("/users", middleware.verifyToken, userController.getAllUsers);

// delete
router.delete("/users/:id", userController.deleteUser);


module.exports = router;
