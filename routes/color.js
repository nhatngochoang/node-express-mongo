import express from "express";
import { create, get } from "../controllers/color.js";
const router = express.Router();

// get color
router.get("/colors", get);

// add color
router.post("/colors", create);


module.exports = router;
