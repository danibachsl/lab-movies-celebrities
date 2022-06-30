// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/movie.model");

// ****************************************************************************************
// **********************         ALL ROUTES BELOW       **********************************
// ****************************************************************************************

router.get('/movies/create', (req, res) => {
    Celebrity
        .find()
        .then((celebrities) => {
            res.render('movies/new-movie', { celebrities })
        })
        .catch((err) => console.log(`Error retrieving celebrities: ${err}`));
})

router.post('/movies/create', (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    
    Movie
        .findOne({ title })
        // .populate('cast')
        .then((movieFromDB) => {
            if (!movieFromDB) {
                Movie
                    .create( req.body )
                    .then(() => res.redirect('/movies'));
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
    Movie
      .find()
      .then((moviesFromDB) => res.render("movies/movies.hbs", { moviesFromDB }))
      .catch((err) => console.log(`Error while getting movies from the DB: ${err}`));
});


module.exports = router;