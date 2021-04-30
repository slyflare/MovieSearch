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
  var getString;
  if (req.query.Title)
    res.send(
      "http://www.omdbapi.com/?i=" + req.query.Title + "&apikey=e8f391fc"
    );

  res.status(200);
  res.render("home.pug");
});

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
