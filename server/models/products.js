const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const { Products } = require('.');

class Products extends Model {
}

Products.innit({
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    range: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    
})
    

module.exports = Products