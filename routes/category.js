import express from "express";
import { create, get } from "../controllers/category.js";
const router = express.Router();

// get category
router.get("/categories", get);

// add category
router.post("/categories", create);


module.exports = router;
