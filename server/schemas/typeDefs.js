const { gql } = require('apollo-server-express');



const typeDefs = gql` 
type User {
    _id: ID
    username: String
    email: String
    reviewCount: Int
    savedReview: [Review]!
}

type Review {
    
}








`

module.exports = typeDefs;