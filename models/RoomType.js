const { Schema, model } = require('mongoose');

const roomTypesSchema = new Schema({
    suite: {
        type: String,
        required: true,
    },
});

const RoomTypesSchema = model('RoomTypesSchema', roomTypesSchema);

module.exports = RoomTypesSchema;