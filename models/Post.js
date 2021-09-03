const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    // city: { 
    //     //brings our city id in here so that the post knows which city  it belongs to
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City'
    // },
    //to be done after mvp is met
    //date: type: Date,
    //picture: type: string //cover photo for the post,
    //comments: [] array of objects
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
