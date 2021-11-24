const User = require('./user')
const Review = require ('./reviews')
const Products = require('./products')


User.hasMany(Review,{
    foreignKey: 'reviewId',
    onDelete: 'CASCADE',
})


module.exports = {User, Review, Products}