const express = require("express");
const Workout = require("../models/workouts");
var router = express.Router();

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.post("/api/workouts", function (req, res) {
    Workout.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
  app.put("/api/workouts/:id", function (req, res) {
    var id = req.params.id;
    Workout.update(
      {
        _id: id,
      },
      {
        //pushes the info the user entered into the exercises array
        $push: {
          exercises: req.body,
        },
      }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};


// /api/workouts
// GET PUT POST
// router.post
// Workout.create({})

// module.exports = router;
