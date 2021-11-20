const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const userReviews = require('./userReviews');
const { Review } = require('.');

class Review extends model {
}
Review.init({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },
    userId: {
        type: DataTypes.UUIDV4,
        foreignKey: true,
    }

})

module.exports = Review