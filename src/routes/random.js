import express from "express";
import RandomController from "../app/controller/GetRandom.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const randomController = new RandomController();
// siteController

router.get("/create", randomController.index);
router.post("/store", randomController.store);

export default router;
