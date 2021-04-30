const pug = require("pug");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.json());

//Home page
app.get("/", (req, res) => {
  if (req.query.Title) console.log(Title);

  res.status(200);
  res.render("home.pug");
  a;
});

function getMovie(Title) {}

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
