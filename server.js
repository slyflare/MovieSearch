const pug = require("pug");
const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("views", "./");
app.set("view engine", "pug");
app.use(express.json());

let movies = [];

//Home page
app.get("/", (req, res) => {
  if (req.query.Title)
    axios
      .get("http://www.omdbapi.com/?t=" + req.query.Title + "&apikey=e8f391fc")
      .then((resp) => {
        if (resp.data.Response) {
          let movie = {
            Title: resp.data.Title,
            Year: resp.data.Year,
            Rated: resp.data.Rated,
            Released: resp.data.Released,
            Genre: resp.data.Genre,
            Director: resp.data.Director,
            Writer: resp.data.Writer,
            Actors: resp.data.Actors,
            Plot: resp.data.Plot,
          };

          movies.push(movie);
          res.status(200).render("home", { movies: movies });
        } else res.status(404).send("movie not found");
      });
  else res.status(200).render("home", { movies: movies });
});

app.get("/:Title", (req, res) => {
  var movie = movies.find((movie) => {
    return movie.Title === req.params.Title;
  });

  if (movie.Title != undefined) {
    console.log("Yes");
    res.status(200).render("movie", { movie: movie });
  }
});

app.listen(port);
console.log(`Server listening at http://localhost:${port}`);
