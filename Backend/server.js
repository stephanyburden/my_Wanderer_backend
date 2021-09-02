const express = require('express');
const cors = require('cors');
const cityController = require('./controllers/cityController.js')
const postController = require('./controllers/postController.js')

const port = 4000;
const app = express();

app.use(cors())
// allows for req.body
app.use(express.json()) 

app.use('/api/city', cityController)
app.use('/api/city', postController)


app.listen(port, () => {
    console.log(`Brb, journeying across port ${port}`)
})