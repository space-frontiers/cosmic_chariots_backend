const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  mission: {
    _id: {
      type: Schema.Types.ObjectId,
      required: false,
    },
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
    _id: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    suite: {
      type: String,
      required: false,
    },
  },
  excursion: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      excursion: {
        type: String,
        required: false,
      },
    },
  ],
  on_board_activity: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      on_board_activity: {
        type: String,
        required: false,
      },
    },
  ],
  dining_package: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      dining_package: {
        type: String,
        required: false,
      },
    },
  ],
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
