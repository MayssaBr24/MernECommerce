const mongoose = require("mongoose");

const scategorieSchema = new mongoose.Schema({
    nomscategorie: {
        type: String,
        required: true
    },
    imagescat: {
        type: String,
        required: false
    },
    categorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie", // nom du modèle en string
        required: true
    }
});

module.exports = mongoose.model("Scategorie", scategorieSchema);
