import Cocktail from "../models/Cocktail.js";

class RandomController {
  // Get /news
  index(req, res, next) {
    res.render("random");
  }
  store(req, res, next) {
    const formData = { ...req.body };
    formData.ingredients = formData.ingredients.split(",");
    formData.ingredients = formData.ingredients.filter(Boolean);
    const cocktail = new Cocktail(formData);
    cocktail
      .save()
      .then(() => res.redirect("/random/create"))
      .catch(next);
  }
}
export default RandomController;
