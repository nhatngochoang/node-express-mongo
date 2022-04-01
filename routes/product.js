import express from "express";
import { create, get } from "../controllers/product.js";
const router = express.Router();

// products
router.get("/products", get);

// product
router.get("/product/:id", (req, res) => {
   res.json({
      id: req.params.id,
      name: "Product 1",
   });
});

// add product
router.post("/products", create);

module.exports = router;
