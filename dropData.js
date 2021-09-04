//to be used to large scale delete data when working with changes to schemas in later sprints

const db = require('./models/index.js');

db.Post.deleteMany({}, (err) =>{
    if (err) return console.log(err)

    db.City.deleteMany({}, (err) => {
        if (err) console.log(err)
    })

    console.log("deleted all cities")
})