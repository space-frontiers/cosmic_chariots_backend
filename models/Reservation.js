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
      type: Schema.Types.ObjectId,
      ref: "Excursion",
    },
  ],
  on_board_activity: [
    {
      type: Schema.Types.ObjectId,
      ref: "OnBoardActivities",
    },
  ],
  dining_package: [
    {
      type: Schema.Types.ObjectId,
      ref: "DiningPackages",
    },
  ],
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
