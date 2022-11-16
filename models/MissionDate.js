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
    room_type: [
        {
            type: Schema.Types.ObjectId,
            ref: 'RoomType'
          }
    ]
});


const MissionDate = model('MissionDateSchema', missionDateSchema);

module.exports = MissionDate;