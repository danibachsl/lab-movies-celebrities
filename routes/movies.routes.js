// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/movie.model");

// all your routes here

router.get('/movies/create', (req, res) => {
    res.render('movies/new-movie.hbs')
})

router.post('/movies/create', (req, res, next) => {
    const { movie } = req.body;
    Movie.findOne({ movie })
      .then((movieFromDB) => {
        if (!movieFromDB) {
          // prettier-ignore
          Movie.create({ movie })
          .then(() => res.redirect('/movies/create'));
        } else {
          res.render("/movies/create", { message: "It seems the movie already exists. ☀️" });
          return;
        }
      })
      .catch((err) => console.log(`Error while creating a new movie: ${err}`));
})
module.exports = router;