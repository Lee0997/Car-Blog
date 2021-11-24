const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/user');
const { signToken } = require('../utils/auth');
const { Review } = require('../models/reviews')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id

                })
            }
            throw new AuthenticationError("User not logged in.")
        },

        getReviews: async (parent, args, context) => {

        }
    },

    Mutation: {
            createUser: async (parent, { username, email, password }, args, context) => {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                
                if (!user) {
                   console.log('User could not be created.');
                }
    
                return { token, user };
            },
    
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email: email });
                if (!user) {
                    throw new AuthenticationError("There is no User with this email.")
                }
    
                const correctPw = await user.isCorrectPassword(password);
    
                if (!correctPw) {
                    throw new AuthenticationError("Incorrect password!");
                }
                const token = signToken(user);
                return { token, user };
            },

            saveReview: async (parent, args, context) => {
                console.log(args);
                if (context.user) {
                    return User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { savedReview: args } },
                        { new: true, runValidators: true }
                        );
                }
                throw new AuthenticationError("Login required!");
            },
    
            removeReview: async (parent, args, context) => {
                if (context.user) {
                    return User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { savedReview: { reviewId: args.reviewId } } },
                        { new: true }
                    );
                }
                throw new AuthenticationError("Login required!")
            }
        }    
    
    
    }


module.exports = resolvers;