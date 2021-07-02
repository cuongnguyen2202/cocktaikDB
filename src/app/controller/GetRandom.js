import Cooktail from "../models/Cooktail.js";

class RandomController {
  // Get /news
  index(req, res, next) {
    res.render("random");
  }
  store(req, res, next) {
    const formData = { ...req.body };
    formData.ingredients = formData.ingredients.split(",");
    formData.ingredients = formData.ingredients.filter(Boolean);
    const cooktail = new Cooktail(formData);
    cooktail
      .save()
      .then(() => res.redirect("/random/create"))
      .catch(next);
  }
}
export default RandomController;
