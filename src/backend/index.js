const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/routes");
const connectDatabase = require("./db");

connectDatabase();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to FoodLink" });
});

app.get("*", (req, res) => {
  return res.send(`<h1>Page not Found, Error 404</h1>`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
