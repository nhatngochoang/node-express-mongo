import express from "express";
import { create, getAll, getBySlug, getByCategorySlug } from "../controllers/product.js";
const router = express.Router();

// get products
router.get(`/products`, getAll);

// get product
router.get("/product/:slug", getBySlug);

// get related products
router.get("/products/:categorySlug", getByCategorySlug);

// add product
router.post("/products", create);


module.exports = router;
