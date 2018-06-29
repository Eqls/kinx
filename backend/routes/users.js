const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('../middlewares/auth');
const User = require('../models/User');
const config = require('../config');

router.post('/register', (req, res) => {
  console.log('ttt');
  let newUser = User({
    ...req.body
  });
  try {
    User.create(newUser, (err, user) => {
      console.log(newUser);
      if (err) console.log(err);
      res.json({
        success: err ? false : true,
        error: err && 'Something went wrong!'
      })
    });
  }
  catch (err) {
    console.log(err);
    res.json({
      success: false,
      error: 'Something went wrong!'
    })
  }
});

router.post('/auth', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (!username) {
    res.json({
      success: false,
      error: 'Please enter your username!'
    });
  }
  if (!password) {
    res.json({
      success: false,
      error: 'Please enter your password!'
    });
  }
  try {
    User.getByUsername(username, function(err, user) {
      if (err || !user) {
        res.json({
          success: false,
          error: 'User does not exist!'
        });
      }
      else {
        User.comparePassword(password, user.password, function(err, isMatch) {
          if (isMatch) {
            user.password = undefined;
            user.created = undefined;
            const token = 'Bearer ' + jwt.sign({
              uid: user._id
            }, config.JWT_SECRET, {
              expiresIn: 604800 // 1 week
            });
            res.json({
              success: true,
              token: token,
              user: user
            });
          }
          else {
            res.json({
              success: false,
              error: 'Incorrect password!'
            });
          }
        });
      }
    });
  }
  catch (err) {
    res.json({
      success: false,
      error: 'Something went wrong!'
    });
  }
});

// returns all players from the database
router.get('/', auth.isLogged, (req, res) => {
  User.getAll((err, users) => {
    if (err) res.json({
      success: false,
      message: err
    });
    res.json({
      success: true,
      all: users
    });
  })
});

router.put('/', auth.isLogged, auth.isAdmin, (req, res) => {
  let updatedUser = new User({
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });
  User.update(updatedUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    }
    else {
      res.json({
        success: true
      });
    }
  })
});

router.delete('/:id', auth.isLogged, auth.isAdmin, (req, res) => {
  User.delete(req.params.id, (err, user) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    }
    else {
      res.json({
        success: true
      });
    }
  })
});

//validatinta useri
router.post('/validate', auth.isLogged, (req, res) => {
  console.log(req.uid);
  User.getById(req.uid, (err, user) => {
    if (err || !user) {
      res.json({
        success: false,
        message: "User with this id doesnt exist!"
      });
    }
    else {
      res.json({
        success: true,
        user: {
          _id: user._id,
          email: user.email,
          name: user.name
        }
      })
    }
  });
});

module.exports = router;