import express from "express";
import { create, get } from "../controllers/slider.js";
const router = express.Router();

// get slider
router.get("/sliders", get);

// add slider
router.post("/sliders", create);

module.exports = router;
