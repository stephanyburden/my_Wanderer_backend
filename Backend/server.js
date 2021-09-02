const express = require('express');
const cors = require('cors');
const cityController = require('./controllers/cityController.js')

const port = 4000;
const app = express();

// app.use(cors())
// app.use(express.json())

// app.use('/api/city', cityController)

app.listen(port, () => {
    console.log(`Brb, journeying across port ${port}`)
})