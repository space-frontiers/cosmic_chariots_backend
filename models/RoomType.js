const { Schema, model } = require('mongoose');

const roomTypesSchema = new Schema({
    suite: {
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

const RoomTypesSchema = model('RoomTypesSchema', roomTypesSchema);

module.exports = RoomTypesSchema;