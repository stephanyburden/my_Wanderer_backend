const mongoose = require('mongoose');
// const CityJSModels = require('./City')


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
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

//export to controller
// module.exports = {
//     City:CityJSModels.City,
//     Posts:CityJSModels.Posts
// };

module.exports = {
  City: require('./City.js'),
  Post: require('./Post.js')
}