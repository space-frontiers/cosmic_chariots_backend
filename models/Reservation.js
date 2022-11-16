const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
    ],
    excursion: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Excursion'
          }
    ],
    on_board_activity: [
        {
            type: Schema.Types.ObjectId,
            ref: 'OnBoardActivities'
          }
    ],
    dining_package: [
        {
            type: Schema.Types.ObjectId,
            ref: 'DiningPackages'
          }
    ],
    room_type: [
        {
            type: Schema.Types.ObjectId,
            ref: 'RoomType'
          }
    ],
  });


const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;