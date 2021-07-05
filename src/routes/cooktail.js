import express from "express";
import CocktailController from "../app/controller/CocktailController.js";
const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const cocktailController = new CocktailController();
// siteController

router.get("/create", cocktailController.create);
router.post("/store", cocktailController.store);
router.get("/search", cocktailController.search);
router.get("/:id/edit", cocktailController.edit);
router.put("/:id", cocktailController.update);
router.delete("/:id", cocktailController.delete);
router.get("/:slug", cocktailController.detail);

export default router;
