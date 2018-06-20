const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin'
}

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: USER_ROLES.USER
  }
})

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getByEmail = function(email, callback) {
  let query = {
    'email': email
  }
  User.findOne(query, callback);
}

module.exports.getAll = function(callback) {
  User.find(callback).select('-password');
}

module.exports.create = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if(err) throw err;
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.delete = function(id, callback) {
  User.findByIdAndRemove(id, callback);
}

module.exports.update = function(user, callback) {
  if(user.password !== '') {
    bcrypt.genSalt(10, function(err, salt) {
      if(err) throw err;
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        User.findByIdAndUpdate(user._id, { $set: user }, { new: true }, callback);
      });
    });
  } else {
    user.password = undefined;
    User.findByIdAndUpdate(user._id, { $set: user }, { new: true }, callback);
  }
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
