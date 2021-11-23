const jwt = require('jsonwebtoken')


// token with token expiry date
const secret = process.env.secret || 'supersupersecret';
const expiration = '2h';

module.exports = {

    authMiddleware: function (req, res, next) {
   
      let token = req.query.token || req.headers.authorization;
  
      if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
      }
  //TODO: Add a redirect to homepage link here.
      if (!token) {
        return res.status(404).json({ });
      }
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        //TODO: Also add a redirect link here.
        console.log('Invalid token');
        return res.status(400).json({ message: 'invalid token!' });
      }
  
      next();
    },
    signToken: function ({ username, email, _id }) {
      const payload = { username, email, _id };
  
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };