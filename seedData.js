//will need editing as we add new schemas
    //if someone can figure out how to seed the data with the cityData.json instead that'd be great
        //it'll make it easier as we add more models, but if not we'll make do

        
//article and code that helped me write the below 
    //https://blog.jscrambler.com/build-database-relationships-with-node-js-and-mongodb


//pulls in our City and Post schemas
const { City, Post } = require('./models');

//creates a function that creates cities
async function seedCities() {
    console.log('Seeding cities...');
    const cities = [
        {name: "Gaborone, Botswana", picture: "https://i.imgur.com/RZP0PqGl.jpg"},
        {name: "Amsterdam, Netherlands", picture: "https://i.imgur.com/vYDGhXBl.jpg"},
        {name: "Thimpu, Bhutan", picture: "https://i.imgur.com/AlWK15ml.jpg"},
        {name: "Valdivia, Chile", picture: "https://i.imgur.com/WgstwmJl.jpg"}
    ];
  
    //goes through the cities array and makes new City data for each item in the array
    for (city of cities) {
      var newCity = new City(city);
      await newCity.save();
    }
  }
  
  async function seedPosts() {
    console.log('Seeding posts...');
  
    //pulls in our cities and finds them and makes variables for each one
    const gaborone = await City.findOne({ name: 'Gaborone, Botswana' });
    const amsterdam = await City.findOne({ name: 'Amsterdam, Netherlands'});
    const thimpu = await City.findOne({name: 'Thimpu, Bhutan'})
    const valdivia = await City.findOne({name: 'Valdivia, Chile'})
    
    //variables that will be Post data
    let post1 = new Post({title: "This one time in...", content: "I never finished the story"})
    let post2 = new Post({title: "Seeding data for two models is hard...", content: "Never again"})

    //save() returns a promise --> bp for updating data in Mongoose --> comes with full validation and middleware
    await post1.save();
    await post2.save();
  
    //adds the posts to their respective cities
    gaborone.posts.push(post1)
    amsterdam.posts.push(post2)
    thimpu.posts.push(post1, post2)
    valdivia.posts.push(post1)
  
    //updates the cities with their new post data
    await gaborone.save();
    await amsterdam.save();
    await thimpu.save();
    await valdivia.save();
  }
  
  seedCities();
  seedPosts();




