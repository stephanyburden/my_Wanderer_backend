const { City, Post } = require('./models');

async function seedCities() {
    console.log('Seeding cities...');
    const cities = [
        {name: "Gaborone, Botswana", picture: "https://i.imgur.com/3qPdl0mm.jpg"},
        {name: "Amsterdam, Netherlands", picture: "https://i.imgur.com/HItfJSkm.jpg"},
        {name: "Thimpu, Bhutan", picture: "https://i.imgur.com/mII9dl5m.jpg"},
        {name: "Valdivia, Chile", picture: "https://i.imgur.com/WzMz0KLm.jpg"}
    ];
  
    for (city of cities) {
      var newCity = new City(city);
      await newCity.save();
    }
  }
  
  async function seedPosts() {
    console.log('Seeding posts...');
  
    const gaborone = await City.findOne({ name: 'Gaborone, Botswana' });
    const amsterdam = await City.findOne({ name: 'Amsterdam, Netherlands'});
    const thimpu = await City.findOne({name: 'Thimpu, Bhutan'})
    const valdivia = await City.findOne({name: 'Valdivia, Chile'})
  
    let post1 = new Post({title: "This one time in...", content: "I never finished the story"})
    let post2 = new Post({title: "Seeding data for two models is hard...", content: "Never again"})

    await post1.save();
    await post2.save();
  
    gaborone.posts.push(post1)
    amsterdam.posts.push(post2)
    thimpu.posts.push(post1, post2)
    valdivia.posts.push(post1)
  
    await gaborone.save();
    await amsterdam.save();
    await thimpu.save();
    await valdivia.save();
  }
  
  seedCities();
  seedPosts();




