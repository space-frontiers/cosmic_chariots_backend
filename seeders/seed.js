const db = require('../config/connection');
const { User, DiningPackage, Excursion, MissionDate,OnBoardActivity, Reservation, RoomType } = require('../models');
const userSeeds = require('./userSeeds.json');
const diningPackageSeeds = require('./diningPackageSeeds.json');
const excursionSeeds = require('./excursionSeeds.json');
const missionDateSeeds = require('./missionDateSeeds.json');
const onBoardActivitySeeds = require('./onBoardActivitySeeds.json');
const reservationSeeds = require('./reservationSeeds.json');
const roomTypeSeeds = require('./roomTypeSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await DiningPackage.deleteMany({});
    await DiningPackage.create(diningPackageSeeds);
    await Excursion.deleteMany({});
    await Excursion.create(excursionSeeds);
    await MissionDate.deleteMany({});
    await MissionDate.create(missionDateSeeds);
    await OnBoardActivity.deleteMany({});
    await OnBoardActivity.create(onBoardActivitySeeds);
    await Reservation.deleteMany({});
    await Reservation.create(reservationSeeds);
    await RoomType.deleteMany({});
    await RoomType.create(roomTypeSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});