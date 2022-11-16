const { Schema, model } = require('mongoose');

const roomTypesSchema = new Schema({
    suite: {
        type: String,
        required: true,
    },
    amenities_1: {
        type: String,
        required: true,
    },
    amenities_2: {
        type: String,
        required: true,
    },
    amenities_3: {
        type: String,
        required: true,
    },
    amenities_4: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
});

const RoomTypesSchema = model('RoomTypesSchema', roomTypesSchema);

module.exports = RoomTypesSchema;