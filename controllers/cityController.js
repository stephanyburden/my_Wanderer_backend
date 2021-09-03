const router = require('express').Router();
const db = require('../models');

//index route --> return data for all cities
router.get('/', (req, res) => {
    db.City.find({}, (err, foundCity) => {
        if (err) return console.log(err);
        res.json(foundCity)
    })
})


//show route --> data for one city
router.get('/:id', (req,res) => {
    db.City.findById(req.params.id, (err,foundCity) => {
        if (err) return console.log(err);

        res.json(foundCity);
    });
})


//post route --> create a city
router.post('/', (req, res) => {
    db.City.create(req.body, (err, createdCity) => {
      if (err) return console.log(err);
      console.log(req.body)
      res.json(createdCity);
    });
  });


//update route --> update a city
router.put('/:id', (req, res) => {
    db.City.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (err, updatedCity) => { 
        if (err) return console.log(err);
        
        res.json(updatedCity);
      });
  });



//delete route --> delete a city
router.delete('/:id', (req, res) => {
    db.City.findByIdAndDelete(req.params.id, (err, deletedCity) => {
        if (err) return console.log(err);
        res.json("We deleted this")
    })
})

module.exports = router;