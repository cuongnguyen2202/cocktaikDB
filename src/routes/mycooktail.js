import express from "express";
import MyCooktailController from "../app/controller/MyCooktailController.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const myCooktailController = new MyCooktailController();
// siteController

router.get("/my-cooktail", myCooktailController.show);

export default router;
