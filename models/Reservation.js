const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
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
  room_type: {
      type: String,
      trim: true,
      unique: false,
  }
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
