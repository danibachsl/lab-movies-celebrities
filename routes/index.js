const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Celebrities GET method
router.get('/celebrities/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  Celebrity.create()
    .then((response) => {
      res.render("celebrities/new-celebrity.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});

// Celebrities POST method
router.get('/celebrities/create', (req, res, next) => {
  
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;

  Celebrity.create({
    name:name,
    occupation:occupation,
    catchPhrase:catchPhrase
  })
  .then(() => {
     res.redirect('/celebrities'); 
  })
  .catch(() => {
    res.render("celebrities/new-celebrity.hbs");
  });
});

module.exports = router;
