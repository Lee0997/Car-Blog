const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


class User extends Model {
    validatePassword(password) {
        return bycrpt.compareSync(password, this.password)
    }
}



const userSchema = new Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            isEmail: true,

        }

    },
    password: {
        type: String,
        required: true
    }

},
    {
        hooks: {
            beforeCreate: aysnc(newUserData => {
                newUserData.password = await bycrpt.hash(newUserData.password, 10)
                return newUserData
            }),
            beforeUpdate: aysnc(updatedUserData => {
                updatedUserData.password = await bycrpt.hash(updatedUserData.password, 10)
                return updatedUserData
            }),

        },
        sequelize, modelName: 'User'

    })
module.exports = User