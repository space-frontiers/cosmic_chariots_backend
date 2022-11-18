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
    type: Schema.Types.ObjectId,
    ref: "RoomType",
  },
  mission_date: {
    type: Schema.Types.ObjectId,
    ref: "MissionDate",
  }
  // mission_date: {
  //   destination: {
  //     type: String,
  //     required: false,
  //   },
  //   date: {
  //     type: String,
  //     required: false,
  //   },
  //   description: {
  //     type: String,
  //     required: false,
  //   },
  // }
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
