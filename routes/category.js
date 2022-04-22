import express from "express";
import { create, get, deleteCategory, updateCategory } from "../controllers/category.js";
const router = express.Router();

// get category
router.get("/categories", get);

// add category
router.post("/categories", create);

// delete category
router.put("/categories/:id", updateCategory);

// delete category
router.delete("/categories/:id", deleteCategory);


module.exports = router;
