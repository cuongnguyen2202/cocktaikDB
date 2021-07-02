import siteRouter from "./site.js";
import randomRouter from "./random.js";
import cooktailRouter from "./cooktail.js";
import myCooktailRouter from "./mycooktail.js";
const route = (app) => {
  app.use("/my", myCooktailRouter);
  app.use("/cooktail", cooktailRouter);
  app.use("/random", randomRouter);
  app.use("/", siteRouter);
};

export default route;
