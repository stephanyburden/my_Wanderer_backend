const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: String,
    content: String,
    user: String,
    date: Date
})
const CitySchema = new Schema({
    Name: String,
    Photo: String,
    post: [PostSchema]
})
const City = mongoose.model('City', CitySchema);
const Posts = mongoose.model('Post', PostSchema)

module.exports = {
    City:City,
    Posts:Posts
}


