const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const userReviews = require('./userReviews');
const { Review } = require('.');

class Review extends model {
}

const reviewSchema = new Schema(
    Review.init({

        review: {
            type: String,
            required: true,
        
        },
classes: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]

})
)


module.exports = Review