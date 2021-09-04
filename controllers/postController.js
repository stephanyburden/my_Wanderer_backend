const router = require('express').Router();
const db = require('../models');

//index route --> return data for all posts
router.get('/:cityId/posts', (req, res) => {
    db.City.findById(req.params.cityId, (err, foundCity) => {
        if (err) return console.log(err);
        res.json(foundCity.posts)
    })
});

//show route
router.get('/:cityId/posts/:postsId', (req, res) => {
    db.Post.findById(req.params.postsId, (err, foundPost) => {
        if (err) return console.log(err);
        res.json(foundPost);
    })
})

//post route --> creates post
router.post('/:cityId/posts', (req,res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err) return console.log(err);

        //finds the corresponding city and adds the post
        db.City.findByIdAndUpdate(
            req.params.cityId,
            //$push is a convention of mongoose
            //we push our createdPost, as the value, into the posts key of the
                //city schemas object
            {$push: {posts: createdPost} },
            (err, updatedCity) => {
                if (err) return console.log(err)
            }
        )
        res.json(createdPost)
    })
})


////////////////////after MVP
//update route

//delete route 
    //will we want to make sure that we delete its place in the City's posts array too, or is that 
        //automatically done when we delete a singular post?



module.exports = router;