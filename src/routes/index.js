import siteRouter from "./site.js";
import randomRouter from "./random.js";
import cocktailRouter from "./cooktail.js";
import myCocktailRouter from "./mycooktail.js";

const route = (app) => {
  app.use("/my", myCocktailRouter);
  app.use("/cocktail", cocktailRouter);
  app.use("/random", randomRouter);
  app.use("/", siteRouter);
  app.use(function (req, res) {
    res.status(404).json({
      message: "Page Not Found",
    });
  });
};

export default route;
