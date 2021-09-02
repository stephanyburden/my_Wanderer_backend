const router = require('express').Router();
const db = require('../models');

//index route --> return data for all cities
router.get('/:cityid/posts', (req, res) => {
    db.City.findById(req.params.cityid, (err,foundCity) => {
        if (err) return console.log(err);

        res.json(foundCity.posts);
    });
})
module.exports = router;