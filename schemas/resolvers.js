const { AuthenticationError } = require('apollo-server-express');
const { DiningPackage, Excursion, MissionDate, OnBoardActivity, Reservation, RoomType, User } = require('../models');
const { signToken } = require('../utils/auth');
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
    addUser: async (parent, { email, password }) => {
      const user = await User.create({email, password });
    //   const token = signToken(profile);

    //   return { token, User };
      return { User };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const correctPw = await user.isCorrectPassword(password);

      if (!user || !correctPw) {
        throw new AuthenticationError('Unable to locate user with information provided');
      }

      const token = signToken(user);
      return { token, user };
    },
    addReservation: async (parent, {}) => {
        const reservation = await Reservation.create({})
      return reservation
    },
    updateReservationMissionDate: async (parent, { reservationId, input }, context) => {
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
    updateReservationRoomType: async (parent, { reservationId, input }, context) => {
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
    updateReservationExcursion: async (parent, { reservationId, input }, context) => {
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
    updateReservationActivity: async (parent, { reservationId, input }, context) => {
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
    updateReservationDining: async (parent, { reservationId, input }, context) => {
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
    removeReservationExcursion: async (parent, { reservationId, excursionId }, context) => {
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
    removeReservationActivity: async (parent, { reservationId, onBoardActivityId }, context) => {
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
    removeReservationDiningPackage: async (parent, { reservationId, diningPackageId }, context) => {
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


    // updateReservation: async (parent, { reservationId, room_type }) => {
    //     return Reservation.findOneAndUpdate(
    //       { _id: reservationId },
    //       {
    //         $addToSet: { room_type: room_type },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   },
    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
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