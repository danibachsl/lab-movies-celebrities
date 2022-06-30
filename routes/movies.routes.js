// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/movie.model");

// ****************************************************************************************
// **********************         ALL ROUTES BELOW       **********************************
// ****************************************************************************************

router.get('/movies/create', (req, res) => {
    res.render('movies/new-movie.hbs')
})

router.post('/movies/create', (req, res, next) => {
    const { movie } = req.body;

    Movie.findOne({ movie })
      .then((movieFromDB) => {
        if (!movieFromDB) {
          // prettier-ignore
          Movie.create({ title:title, genre:genre, plot:plot, cast:cast })
          .then(() => res.redirect('/movies/create'));
        } else {
          res.render("/movies/create", { message: "It seems the movie already exists. ☀️" });
          return;
        }
      })
      .catch((err) => console.log(`Error while creating a new movie: ${err}`));
})

// ****************************************************************************************
// GET route to display all movies from the DB
// ****************************************************************************************

router.get("/movies", (req, res) => {
    Movie.find() // <-- .find() method gives us always an ARRAY back
      .then((moviesFromDB) => res.render("movies/movies.hbs", { movies: moviesFromDB }))
      .catch((err) => console.log(`Error while getting movies from the DB: ${err}`));
});


module.exports = router;