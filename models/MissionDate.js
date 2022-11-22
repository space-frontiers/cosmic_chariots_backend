const { Schema, model } = require('mongoose');

const missionDateSchema = new Schema({
    destination: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});


const MissionDate = model('MissionDateSchema', missionDateSchema);

module.exports = MissionDate;