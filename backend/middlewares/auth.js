const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

module.exports.isLogged = (req,res,next) => {
  let token = req.headers['authorization'];
  if (token) {
    token = token.substring(7);
    jwt.verify(token, config.JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.json({
              success: false,
              message: err
            });
        }
        req.uid = decoded.uid;
        next();
    });
  } else {
    return res.json({
      success: false,
      message: 'User is not authenticated!'
    });
  }
}

module.exports.isAdmin = (req,res,next) => {
  User.getById(req.uid, (err, user) => {
    if (err || !user) {
      return res.json({
        success: false,
        message: "User with this id doesnt exist!"
      });
    } else {
      if(user.role === "admin") {
        next();
      } else {
        return res.json({
          success: false,
          message: 'User is not an admin!'
        });
      }
    }
  });
}
