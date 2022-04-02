import express from "express";
import { create, get, deleteOrder } from "../controllers/order.js";
const router = express.Router();

// get order
router.get("/orders", get);

// add order
router.post("/orders", create);

// delete order
router.delete("/orders", deleteOrder);


module.exports = router;
