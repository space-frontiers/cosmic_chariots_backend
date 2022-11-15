const { Schema, model } = require('mongoose');

const excursionSchema = new Schema({
    excursion: {
        type: String,
        required: true,
    },
    reservation: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
          }
    ]
});


const Excursion = model('Excursion', excursionSchema);

module.exports = Excursion;