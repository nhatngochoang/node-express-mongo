import express from "express";
import { create, get } from "../controllers/policy.js";
const router = express.Router();

// get policy
router.get("/policys", get);

// add policy
router.post("/policys", create);


module.exports = router;
