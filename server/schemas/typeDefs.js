const { gql } = require('apollo-server-express');



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

type Review {
    _id: ID
    review: String
    classes: [User]
}

type Query {

    
}








`

module.exports = typeDefs;