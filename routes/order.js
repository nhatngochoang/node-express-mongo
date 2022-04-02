import express from "express";
import { create, get, deleteOrder, getByID } from "../controllers/order.js";
const router = express.Router();

// get order
router.get("/orders", get);

// get order
router.get("/orders/:id", getByID);

// add order
router.post("/orders", create);

// delete order
router.delete("/orders", deleteOrder);


module.exports = router;
