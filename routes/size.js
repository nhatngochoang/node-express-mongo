import express from "express";
import { create, get } from "../controllers/size.js";
const router = express.Router();

// get size
router.get("/sizes", get);

// add size
router.post("/sizes", create);

module.exports = router;
