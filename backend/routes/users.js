const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config");
const model = require("../models");
const middleware = require("../middleware");
const rest = require("../utils/rest");

router.post("/", (req, res) => {
  model.User.create(new model.User(req.body), (err, response) => {
    if (err) next(err);
    res.json(response);
  });
});

router.post("/auth", (req, res, next) => {
  console.log(req.body);
  if (req.body.username !== undefined || req.body.password !== undefined) {
    let username = req.body.username;
    let password = req.body.password;
    model.User.getByUsername(username, function(err, result) {
      let user = result._doc;
      if (err) next(err);
      if (!user) next("User not found!");
      model.User.comparePassword(password, user.password, function(
        err,
        isMatch
      ) {
        if (err) next(err);
        if (isMatch) {
          user.password = undefined;
          user.created = undefined;
          const token =
            "Bearer " +
            jwt.sign({ uid: user._id }, config.JWT_SECRET, {
              expiresIn: 604800 // 1 week
            });
          res.json({
            ...user,
            token
          });
        } else {
          next("Incorrect password!");
        }
      });
    });
  } else {
    next("Missing credentials");
  }
});

router.get("/", middleware.auth, (req, res) => {
  model.User.getAll((err, response) => {
    if (err) next(err);
    res.json(response);
  });
});

router.put("/", middleware.auth, (req, res) => {
  model.User.update(req.body, (err, response) => {
    if (err) next(err);
    res.json(response);
  });
});

router.delete("/", middleware.auth, (req, res, next) => {
  rest.delete(req, res, next, model.User);
});

//validatinta useri
router.post("/validate", middleware.auth, (req, res) => {
  model.User.getById(req.uid, (err, user) => {
    if (err) next(err);
    if (!user) next("User not found!");
    res.json({
      _id: user._id,
      username: user.username,
      name: user.name
    });
  });
});

module.exports = router;
