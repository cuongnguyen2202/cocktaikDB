import Cocktail from "../models/Cocktail.js";
import {
  mongooseToObject,
  multiMongooseToObject,
} from "../../util/mongoose.js";
class CocktailController {
  // GET /
  detail(req, res, next) {
    // Cooktail.findOne({ slug: req.params.slug })
    //   .then((cooktail) => {
    //     return res.render("cooktail/detail", {
    //       cooktail: mongooseToObject(cooktail),
    //     });
    //   })
    //   .catch(next);
    Cocktail.findOne({ slug: req.params.slug })
      .then((cocktail) => {
        if (!cocktail) {
          res.status(404);
          res.json({
            message: "Page not found",
          });
        }
        return res.json(cocktail);
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("cooktail/create");
  }
  //GET cooktail/create/
  store(req, res, next) {
    const formData = { ...req.body };
    formData.ingredients = formData.ingredients.split(",");
    formData.ingredients = formData.ingredients.filter(Boolean);

    const cocktail = new Cocktail(formData);
    cocktail
      .save()
      .then((cocktail) =>
        res.json({
          message: "new cocktail added",
          data: cocktail,
        })
      )
      .catch((err) => {
        res.status(400);
        res.json({
          message: err.message,
        });
      });
  }
  //GET cooktail/:id/edit
  edit(req, res, next) {
    Cocktail.findById(req.params.id)
      .then((cocktail) => {
        if (!cocktail) {
          res.status(400);
          return res.json({
            message: "Id not found",
          });
        }
        return res.render("cocktail/edit", {
          cooktail: mongooseToObject(cocktail),
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  }
  //PUT cooktail/:id
  update(req, res, next) {
    const formData = { ...req.body };
    formData.ingredients = formData.ingredients.split(",");
    formData.ingredients = formData.ingredients.filter(Boolean);
    Cocktail.updateOne({ _id: req.params.id }, formData)
      .then((cocktail) =>
        res.json({
          message: "update successfully",
          data: res.json(cocktail),
        })
      )
      .catch((err) => {
        res.status(400);
        res.json({
          message: err.message,
        });
      });
  }
  // [delete]cooktail:id
  delete(req, res, next) {
    Cocktail.deleteOne({ _id: req.params.id })
      .then(() =>
        res.json({
          message: "deleted",
        })
      )
      .catch((err) => {
        res.status(400);
        res.json({
          message: err.message,
        });
      });
  }
  // Search
  async search(req, res, next) {
    const queryTern = req.query.search;
    const cocktail = await Cocktail.find()
      .then((cocktail) => {
        return (cocktail = multiMongooseToObject(cocktail));
      })
      .catch(next);
    res.json({
      cocktail: cocktail.filter((item) => {
        return (
          item.name.includes(queryTern) ||
          item.ingredients.some((a) => queryTern.includes(a))
        );
      }),
    });
  }
}

export default CocktailController;
