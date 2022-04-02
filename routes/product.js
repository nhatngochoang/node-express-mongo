import express from "express";
import { create, get, getBySlug } from "../controllers/product.js";
const router = express.Router();

// products
router.get("/products", get);

// product
router.get("/product/:slug", getBySlug);

// add product
router.post("/products", create);

module.exports = router;
