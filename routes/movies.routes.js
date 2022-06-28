// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie.hbs')
})

router.post('/movies/create', (req, res, next) => {
    const { movie } = req.body;
    User.findOne({ movie })
      .then((userDocFromDB) => {
        if (!userDocFromDB) {
          // prettier-ignore
          User.create({ movie })
          .then(() => res.redirect('/movies/create'));
        } else {
          res.render("/movies/create", { message: "It seems the movie already exists. ☀️" });
          return;
        }
      })
      .catch((err) => console.log(`Error while creating a new movie: ${err}`));
})
module.exports = router;