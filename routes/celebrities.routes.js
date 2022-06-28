
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
})
router.post('/celebrities/create', (req, res, next) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    const catchPhrase = req.body.catchPhrase;

    Celebrity.create({name:name, occupation:occupation, catchPhrase:catchPhrase})
    .then(() => {
        res.redirect("/celebrities")
    })
    .catch(() => {
        res.redirect('celebrities/new-celebrity')
    })
});

router.get('/celebrities', (req, res) => {
    Celebrity.find()
    .then((response) => {
        res.render('celebrities/celebrities.hbs', {response})
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = router;