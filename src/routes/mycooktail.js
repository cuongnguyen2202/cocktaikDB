import express from "express";
import MyCocktailController from "../app/controller/MyCocktailController.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const myCocktailController = new MyCocktailController();
// siteController

router.get("/my-cocktail", myCocktailController.show);

export default router;
