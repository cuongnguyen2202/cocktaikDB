import express from "express";
import SiteController from "../app/controller/SiteController.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const siteController = new SiteController();
// siteController

router.get("/", siteController.index);

export default router;
