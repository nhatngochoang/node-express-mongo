import express from "express";
const router = express.Router();

// products
router.get("/products", (req, res) => {
   res.json({
      message: "Products",
   });
});

// product
router.get("/product/:id", (req, res) => {
   res.json({
      id: req.params.id,
      name: "Product 1",
   });
});

// add product
router.post("/products", (req, res) => {
   res.json(req.body);
});

module.exports = router;
