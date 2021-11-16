const jwt = require('jsonwebtoken')


// token with token expiry date
const secret = process.env.secret || 'supersupersecret';
const expiration = '2h';
