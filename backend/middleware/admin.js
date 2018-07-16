const User = require('../models/User');

module.exports = (req,res,next) => {
  User.getById(req.uid, (err, user) => {
    if (err || !user) {
      return next("User with this id doesnt exist!")
    } else {
      if(user.role === "admin") {
        next();
      } else {
        return next("User is not an admin!")
      }
    }
  });
}