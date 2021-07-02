import Cooktail from "../models/Cooktail.js";
import { multiMongooseToObject } from "../../util/mongoose.js";

class MyCooktailController {
  show(req, res, next) {
    Cooktail.find({})
      .then((cooktail) => {
        res.render("mycooktail/storage-cooktail", {
          cooktail: multiMongooseToObject(cooktail),
        });
      })
      .catch(next);
  }
}
export default MyCooktailController;
