const { Schema, model } = require('mongoose');

const excursionSchema = new Schema({
    excursion: {
        type: String,
        required: true,
    },
});


const Excursion = model('Excursion', excursionSchema);

module.exports = Excursion;