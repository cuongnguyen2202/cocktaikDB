import Cooktail from "../models/Cooktail.js";
import { multiMongooseToObject } from "../../util/mongoose.js";
class SiteController {
  // Get /news
  index(req, res, next) {
    Cooktail.find({})
      .then((cooktail) =>
        res.render("home", {
          cooktail: multiMongooseToObject(cooktail),
        })
      )
      .catch(next);
  }
}
export default SiteController;
