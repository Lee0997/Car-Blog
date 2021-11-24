const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/user');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
    }
}


module.exports = resolvers;