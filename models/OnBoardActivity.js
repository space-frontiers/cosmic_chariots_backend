const { Schema, model } = require('mongoose');

const onBoardActivitySchema = new Schema({
    on_board_activity: {
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


const OnBoardActivity = model('OnBoardActivity', onBoardActivitySchema);

module.exports = OnBoardActivity;