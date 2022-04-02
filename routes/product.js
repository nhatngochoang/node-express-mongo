import express from "express";
import { create, get, getBySlug, getByCategorySlug } from "../controllers/product.js";
const router = express.Router();

// get products
router.get("/products", get);

// get product
router.get("/product/:slug", getBySlug);

// get related products
router.get("/products/:categorySlug", getByCategorySlug);

// add product
router.post("/products", create);


module.exports = router;
