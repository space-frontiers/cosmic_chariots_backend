const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  mission: {
    date: {
      type: String,
      required: false,
    },
    destination: {
      type: String,
      required: false,
    },
  },
  room_type: {
    suite: {
      type: String,
      required: false,
    },
  },
  excursion: [
    {
      excursion: {
        type: String,
        required: false,
      },
    },
  ],
  on_board_activity: [
    {
      on_board_activity: {
        type: String,
        required: false,
      },
    },
  ],
  dining_package: [
    {
      dining_package: {
        type: String,
        required: false,
      },
    },
  ],
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
