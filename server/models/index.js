
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


class User extends Model {
    validatePassword(password) {
        return bycrpt.compareSync(password, this.password)
    }
}

