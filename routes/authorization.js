import express from "express";
import { create, get } from "../controllers/authorization.js";
const router = express.Router();

// get authorization
router.get("/authorizations", get);

// add authorization
router.post("/authorizations", create);


module.exports = router;
