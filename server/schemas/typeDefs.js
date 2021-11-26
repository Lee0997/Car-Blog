const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Product {
    _id: ID
    name: String
    type: String
    make: String
    range: Int
    year: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Review {
    _id: ID
    review: String
    classes: [User]
  }

  input ReviewInput {
    authors: [String]
      reviewId: ID
      title: String
      reviewDescription: String
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveReview( reviewData: ReviewInput!): User
    removeReview(reviewId: ID!): User
  }
`;

module.exports = typeDefs;
