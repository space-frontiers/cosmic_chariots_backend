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
    href: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required:true,
    },
    imageAlt: {
        type: String,
        required:false
    }
});


const Excursion = model('Excursion', excursionSchema);

module.exports = Excursion;