const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

module.exports = (req,res,next) => {
  let token = req.headers['authorization'];
  if (token) {
    token = token.substring(7);
    jwt.verify(token, config.JWT_SECRET, function(err, decoded) {
        if (err) next(err)
        req.uid = decoded.uid;
        next();
    });
  } else {
    return next("User is not authenticated!")
  }
}
