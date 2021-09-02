const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    Name: String,
    Photo: String,
    Post: []
})

const City = mongoose.model('City', CitySchema);

module.exports = City; 


