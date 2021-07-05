import Cocktail from "../models/Cocktail.js";
import { multiMongooseToObject } from "../../util/mongoose.js";
class SiteController {
  // Get /news
  index(req, res, next) {
    Cocktail.find({})
      // .then((cooktail) =>
      //   res.render("home", {
      //     cooktail: multiMongooseToObject(cooktail),
      //   })
      // )
      // .catch(next);
      .then((cocktail) => {
        res.json(cocktail);
      })
      .catch(next);
  }
}
export default SiteController;
