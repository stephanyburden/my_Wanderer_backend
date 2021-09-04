const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    picture: String,
    //below we'll push in posts based on their database id 
    posts: [],
})

const City = mongoose.model('City', citySchema);

module.exports = City;




