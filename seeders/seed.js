const db = require('../config/connection');
const { User, Reservation } = require('../models');
const userSeeds = require('./userSeeds.json');
const reservationSeeds = require('./reservationSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Reservation.deleteMany({});
    await Reservation.create(reservationSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

//DiningPackage, Excursion, MissionDate, OnBoardActivity, Reservation, RoomType, 