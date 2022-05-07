import express from "express";
import { send } from "../controllers/contact.js";
const router = express.Router();

// contact
router.post("/contact", send);

module.exports = router;
