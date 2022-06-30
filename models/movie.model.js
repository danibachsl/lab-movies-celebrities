
const mongoose = require("mongoose");


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
    cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "celebrity" }]
})

// crear el Model
const Movie = mongoose.model("movie", movieSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "movie" indica como se llamara nuestra colección => "movies"

module.exports = Movie;