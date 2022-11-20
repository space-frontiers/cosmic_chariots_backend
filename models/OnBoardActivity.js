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
    href: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: false,
    },

});


const OnBoardActivity = model('OnBoardActivity', onBoardActivitySchema);

module.exports = OnBoardActivity;