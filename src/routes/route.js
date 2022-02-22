const express = require("express");
const router = express.Router();
router.get("/students/:name", function (req, res) {
  let studentName = req.params.name;
  console.log(studentName);
  res.send(studentName);
});

router.get("/movies", function (req, res) {
  let movies = [
    "The_Shining",
    "Titanic",
    "Shutter_Island",
    "Pans_Labyrinth",
    "Dhoom",
  ];
  res.send(movies);
});
router.get("/movies/:number", function (req, res) {
  let movies = [
    "The_Shining",
    "Shutter_Island",
    "Titanic",
    "Sin-city",
    "Black-Friday",
  ];
  let index = req.params.number;
  if (index >= movies.length) {
    res.send("doesnt exist");
  } else {
    res.send(movies[index]);
  }
});
router.get("/films", function (req, res) {
  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Demo",
    },
  ];
  res.send(films);
});
router.get("/films/:filmId", function (req, res) {
  let movieId = req.params.filmId;
  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Demo",
    },
  ];

  movieId <= 3 ? res.send(films[movieId]) : res.send("invalid input");
  for (let i = 0; i < films.length; i++) {
    if (movieId >= 5) {
      res.send("invalid film ID");
    } else if (films[i].id !== movieId) {
      continue;
    } else {
      res.send(films[i].name);
    }
  }
});

module.exports = router;
