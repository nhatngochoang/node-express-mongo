import express from "express";
import { create, getAll, getBySlug, getByCategorySlug, update, deleteProduct } from "../controllers/product.js";
const router = express.Router();

// get products
router.get(`/products`, getAll);

// get product
router.get("/product/:slug", getBySlug);

// get related products
router.get("/products/:categorySlug", getByCategorySlug);

// add product
router.post("/products", create);

// update product
router.put("/products/:id", update);

// delete product
router.delete("/products/:id", deleteProduct);


module.exports = router;
