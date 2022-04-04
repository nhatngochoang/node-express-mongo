import express from "express";
import userController from "../controllers/user.js";
const router = express.Router();

// get all
router.get("/users", userController.getAllUsers);

// delete
router.delete("/users/:id", userController.deleteUser);


module.exports = router;
