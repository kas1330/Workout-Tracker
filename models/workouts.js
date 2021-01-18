const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
//schema for workouts, all the info that is asked for
    day: {
        type: Date,
        default: () => new Date ()
    },
    exercises:  Array
})
const Workout = mongoose.model('Workout', workoutSchema);
module.exports= Workout;