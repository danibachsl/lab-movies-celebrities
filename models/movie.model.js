// Add your code here
const mongoose = require("mongoose");
const Movie = require("./Celebrity.model");

// aqui creamos el Schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "celebrity",
    }]
})

// crear el Model
const Movie = mongoose.model("movie", movieSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "movie" indica como se llamara nuestra colección => "movies"

module.exports = Movie;