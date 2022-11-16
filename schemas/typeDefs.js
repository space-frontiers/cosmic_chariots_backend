const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    first_name: String
    last_name: String
    email: String
    phone_number: String
    street_address_1: String
    street_address_2: String
    city: String
    state: String
    zip: String
    country: String
    password: String
    reservation: Reservation
  }

  type Auth {
    token: ID!
    user: User
  }

  type Reservation {
    _id: ID!
    user: User
    excursion: Excursion
    on_board_activity: OnBoardActivity
    dining_package: DiningPackage
  }

  #Room Booking

  type RoomType {
    _id: ID!
    suite: String
  }

  type MissionDate {
    _id: ID!
    destination: String
    date: String
    room_type: RoomType
  }

  #Experiences

  type Excursion {
    _id: ID!
    excursion: String
  }

  type OnBoardActivity {
    _id: ID!
    on_board_activity: String
  }

  type DiningPackage {
    _id: ID!
    package: String
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    me: User
    reservation(reservationId: ID!): Reservation
    reservations: [Reservation]
    diningPackages: [DiningPackage]
    roomTypes: [RoomType]
    excursions: [Excursion]
    missionDates: [MissionDate]
    onBoardActivities: [OnBoardActivity]
  }
`;

module.exports = typeDefs;