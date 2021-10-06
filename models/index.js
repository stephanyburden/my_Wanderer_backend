const mongoose = require('mongoose');
require('dotenv').config();


//our address for our database --> wayfarer is the name of the DATABASE
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/wayfarer';

const configOptions = {
  useNewUrlParser: true,
  /* useCreateIndex: true, */
  useUnifiedTopology: true,
  /* useFindAndModify: false, */
};

// Connects to MongoDB
mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...' + mongoose.connection.host + ":" + mongoose.connection.port))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));


  
//exports the below as the collections to the controller
module.exports = {
  City: require('./City.js'),
  Post: require('./Post.js')
}