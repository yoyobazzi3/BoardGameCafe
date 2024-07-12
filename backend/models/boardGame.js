const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardGameSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    minPlayers:{type: Number, required: true},
    maxPlayers:{type: Number, required: true},
    playTime:{type: Number, required: true}, // this should be in minutes
    ageRecommendation:{type: Number, required: true}, //minumum age e.g 3
    availability:{type Boolean, required: true},
    quantity:{type: Number, required: true},
    difficulty{type: Number, required: true}, // 1-5 scale where 1 is easy, 5 is hard.
});

module.exports = mongoose.model('BoardGame', boardGameSchema);




