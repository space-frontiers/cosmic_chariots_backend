const { gql } = require("apollo-server-express");

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
    reservation: [Reservation]
  }

  type Auth {
    token: ID!
    user: User
  }

  # Reservation

  type Reservation {
    _id: ID!
    mission: MissionDateReservation
    room_type: RoomTypeReservation
    excursion: [ExcursionReservation]
    on_board_activity: [OnBoardActivityReservation]
    dining_package: [DiningPackageReservation]
  }

  type MissionDateReservation {
    date: String
    destination: String
  }

  type RoomTypeReservation {
    suite: String
  }

  type ExcursionReservation {
    excursion: String
  }

  type OnBoardActivityReservation {
    on_board_activity: String
  }

  type DiningPackageReservation {
    dining_package: String
  }

  #Costumer Options

  type RoomType {
    _id: ID!
    suite: String
    amenities_1: String
    amenities_2: String
    amenities_3: String
    amenities_4: String
    cost: String
  }

  type MissionDate {
    _id: ID!
    destination: String
    date: String
    description: String
  }

  type Excursion {
    _id: ID!
    excursion: String
    description: String
    cost: String
    href: String
    imageSrc: String
    imageAlt: String
  }

  type OnBoardActivity {
    _id: ID!
    on_board_activity: String
    description: String
    cost: String
    href: String
    imageSrc: String
    imageAlt: String
  }

  type DiningPackage {
    _id: ID!
    package: String
    description: String
    cost: String
    href: String
    imageSrc: String
    imageAlt: String
  }

  #Input Types

  #Reservations

  input MissionDateInput {
    date: String
    destination: String
  }

  input RoomTypeInput {
    suite: String
  }

  input ExcursionInput {
    excursion: String
  }

  input OnBoardActivityInput {
    on_board_activity: String
  }

  input DiningPackageInput {
    dining_package: String
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

  type Mutation {
    addUser(email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addReservation: Reservation
    updateReservationMissionDate(
      reservationId: ID!
      input: MissionDateInput
    ): Reservation
    updateReservationRoomType(
      reservationId: ID!
      input: RoomTypeInput
    ): Reservation
    updateReservationExcursion(
      reservationId: ID!
      input: ExcursionInput
    ): Reservation
    updateReservationActivity(
      reservationId: ID!
      input: OnBoardActivityInput
    ): Reservation
    updateReservationDining(
      reservationId: ID!
      input: DiningPackageInput
    ): Reservation
  }
`;

module.exports = typeDefs;
