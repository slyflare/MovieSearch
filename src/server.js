const pug = require("pug");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("views", "./");
app.set("view engine", "pug");
app.use(express.json());

//Home page
app.get("/", (req, res) => {
  res.status(200);
  res.render("home.pug");
});

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
