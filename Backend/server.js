const express = require('express'); //calling in express our middleware middleman
const cors = require('cors'); //the calling card between our front end and back end
const rowdy = require('rowdy-logger') //helps us visually see our routes



//DB and Models
const cityController = require('./controllers/cityController.js')
const postController = require('./controllers/postController.js')


//Configuration
const port = 4000;
const app = express();
const rowdyResults = rowdy.begin(app)
app.use(cors())


// allows for req.body
app.use(express.json()) 
//will need below later for sessions
//app.use(sesson({secret}))


//Controllers --> our url will be localhost:4000/api/city or /api/post
app.use('/api/city', cityController)
//creates the same base layer url for the city so we can pass the id of it easily
app.use('/api/city', postController)


app.listen(port, () => {
    console.log(`Brb, journeying across port ${port}`);
    rowdyResults.print()
})