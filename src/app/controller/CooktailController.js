import Cooktail from "../models/Cooktail.js";
import {
  mongooseToObject,
  multiMongooseToObject,
} from "../../util/mongoose.js";
class CooktailController {
  // GET /
  detail(req, res, next) {
    // Cooktail.findOne({ slug: req.params.slug })
    //   .then((cooktail) => {
    //     return res.render("cooktail/detail", {
    //       cooktail: mongooseToObject(cooktail),
    //     });
    //   })
    //   .catch(next);
    Cooktail.findOne({ slug: req.params.slug })
      .then((cooktail) => {
        return res.json(cooktail);
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
    const cooktail = new Cooktail(formData);
    cooktail
      .save()
      .then((cooktail) =>
        res.json({
          message: "new cooktail added",
          data: cooktail,
        })
      )
      .catch(next);
  }
  //GET cooktail/:id/edit
  edit(req, res, next) {
    Cooktail.findById(req.params.id)
      .then((cooktail) => {
        return res.render("cooktail/edit", {
          cooktail: mongooseToObject(cooktail),
        });
      })
      .catch(next);
  }
  //PUT cooktail/:id
  update(req, res, next) {
    const formData = { ...req.body };
    formData.ingredients = formData.ingredients.split(",");
    formData.ingredients = formData.ingredients.filter(Boolean);
    Cooktail.updateOne({ _id: req.params.id }, formData)
      .then((cooktail) =>
        res.json({
          message: "update successfully",
          data: res.json(cooktail),
        })
      )
      .catch(next);
  }
  // [delete]cooktail:id
  delete(req, res, next) {
    Cooktail.deleteOne({ _id: req.params.id })
      .then(() =>
        res.json({
          message: "deleted",
        })
      )
      .catch(next);
  }
  // Search
  async search(req, res, next) {
    const queryTern = req.query.search;
    const cooktail = await Cooktail.find()
      .then((cooktail) => {
        return (cooktail = multiMongooseToObject(cooktail));
      })
      .catch(next);
    console.log(cooktail);
    console.log(queryTern);
    res.json({
      cooktail: cooktail.filter((item) => {
        return (
          item.name.includes(queryTern) ||
          item.ingredients.some((a) => queryTern.includes(a))
        );
      }),
    });
  }
}

export default CooktailController;
