import Cooktail from "../models/Cocktail.js";
import { multiMongooseToObject } from "../../util/mongoose.js";

class MyCocktailController {
  show(req, res, next) {
    Cooktail.find({})
      .then((cocktail) => {
        if (!cocktail) {
          res.status(400);
          res.json({
            message: "No Data",
          });
        }
        res.render("mycocktail/storage-cocktail", {
          cocktail: multiMongooseToObject(cocktail),
        });
      })
      .catch(next);
  }
}
export default MyCocktailController;
