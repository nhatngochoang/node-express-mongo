import express from "express";
import { create, get, deleteOrder, getByID, updateOrder } from "../controllers/order.js";
const router = express.Router();

// get order
router.get("/orders", get);

// get order
router.get("/orders/:id", getByID);

// add order
router.post("/orders", create);

// update order
router.put("/orders/:id", updateOrder);

// delete order
router.delete("/orders/:id", deleteOrder);


module.exports = router;
