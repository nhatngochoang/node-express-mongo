import express from "express";
import userController from "../controllers/user.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

// get all
router.get("/users", middleware.verifyToken, userController.getAllUsers);

// get all
router.get("/userslist/:id", userController.getUserByID);

// update
router.put("/users/:id", userController.updateUser);

// update
router.patch("/users/:id", userController.updateUserTotalSpend);

// delete
router.delete("/users/:id", middleware.verifyTokenAdmin, userController.deleteUser);

// authorization
router.get("/user-info", middleware.verifyAuthorization, userController.getUserInfo);


module.exports = router;
