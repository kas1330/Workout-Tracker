const express = require('express'); 
const Workout = require('../models/workouts');
var router = express.Router();


module.exports = function(app){
    app.get('/api/workouts', function(req,res){
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
}

app.post("api/workouts", function (req,res){
    Workout.create()
    .then(data =>res.json(data))
    .catch(err => {
        res.json(err)
    })
});


// /api/workouts
// GET PUT POST
// router.post
// Workout.create({})

module.exports = router;