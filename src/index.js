import bodyParser from "body-parser";
import express from "express";
import handlebars from "express-handlebars";
import methodOverride from "method-override";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import connect from "./config/db/index.js";
import route from "./routes/index.js";
const app = express();
const port = 3000;
const { dirname } = path;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db
connect();
app.use(express.static(path.join(__dirname, "public")));
// use morgan
app.use(morgan("combined"));
// tempalte engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
// override method
app.use(methodOverride("_method"));
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

console.log("hello");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//
