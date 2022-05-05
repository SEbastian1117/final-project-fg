const { Schema, model } = require('mongoose')

const PetSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

module.exports = model( 'Pet', PetSchema )