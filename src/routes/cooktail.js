import express from "express";
import CooktailController from "../app/controller/CooktailController.js";
const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const cooktailController = new CooktailController();
// siteController

router.get("/create", cooktailController.create);
router.post("/store", cooktailController.store);
router.get("/search", cooktailController.search);
router.get("/:id/edit", cooktailController.edit);
router.put("/:id", cooktailController.update);
router.delete("/:id", cooktailController.delete);
router.get("/:slug", cooktailController.detail);

export default router;
