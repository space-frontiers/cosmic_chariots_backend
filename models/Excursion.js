const { Schema, model } = require('mongoose');

const excursionSchema = new Schema({
    excursion: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
});


const Excursion = model('Excursion', excursionSchema);

module.exports = Excursion;