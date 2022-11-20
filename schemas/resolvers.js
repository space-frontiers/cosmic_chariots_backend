const { AuthenticationError } = require("apollo-server-express");
const {
  DiningPackage,
  Excursion,
  MissionDate,
  OnBoardActivity,
  Reservation,
  RoomType,
  User,
} = require("../models");
const { signToken } = require("../utils/auth");
// const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    users: async () => {
      return User.find();
    },
    reservation: async (parent, { reservationId }) => {
      return Reservation.findOne({ _id: reservationId });
    },
    reservations: async () => {
      return Reservation.find();
    },
    diningPackages: async () => {
      return DiningPackage.find();
    },
    excursions: async () => {
      return Excursion.find();
    },
    missionDates: async () => {
      return MissionDate.find();
    },
    onBoardActivities: async () => {
      return OnBoardActivity.find();
    },
    roomTypes: async () => {
      return RoomType.find();
    },
    // me: async (parent, args, context) => {
    //     if (context.user) {
    //       return Profile.findOne({ _id: context.user._id });
    //     }
    //     throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    addUser: async (parent, { first_name, last_name, email, password }) => {
      const user = await User.create({
        first_name,
        last_name,
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
      // return { User };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const correctPw = await user.isCorrectPassword(password);

      if (!user || !correctPw) {
        throw new AuthenticationError(
          "Unable to locate user with information provided"
        );
      }

      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (
      parent,
      {
        userId,
        phone_number,
        street_address_1,
        street_address_2,
        city,
        state,
        zip,
        country,
      },
      context
    ) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $set: {
            phone_number,
            street_address_1,
            street_address_2,
            city,
            state,
            zip,
            country,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addReservation: async (parent, { userId, reservationId }, context) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $push: { reservation: { _id: reservationId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    createReservation: async (parent, {}) => {
      const reservation = await Reservation.create({});
      return reservation;
    },
    deleteReservation: async (parent, { reservationId }) => {
      return Reservation.findOneAndDelete({ _id: reservationId });
    },
    removeReservation: ({ userId, reservationId }, context) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $pull: { reservation: { _id: reservationId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateReservationMissionDate: async (
      parent,
      { reservationId, input },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $set: { mission: input },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateReservationRoomType: async (
      parent,
      { reservationId, input },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $set: { room_type: input },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateReservationExcursion: async (
      parent,
      { reservationId, input },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $addToSet: { excursion: input },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateReservationActivity: async (
      parent,
      { reservationId, input },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $addToSet: { on_board_activity: input },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateReservationDining: async (
      parent,
      { reservationId, input },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $addToSet: { dining_package: input },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReservationExcursion: async (
      parent,
      { reservationId, excursionId },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $pull: { excursion: { _id: excursionId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReservationActivity: async (
      parent,
      { reservationId, onBoardActivityId },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $pull: { on_board_activity: { _id: onBoardActivityId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReservationDiningPackage: async (
      parent,
      { reservationId, diningPackageId },
      context
    ) => {
      return Reservation.findOneAndUpdate(
        { _id: reservationId },
        {
          $pull: { dining_package: { _id: diningPackageId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;

// { _id: userId },
// {
//     $addToSet: { reservation: reservation },
// },
// {
//   new: true,
//   runValidators: true,
// }
