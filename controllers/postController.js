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
router.post('/:cityId/posts', (req, res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err) return console.log(err);

        //finds the corresponding city and adds the post
        db.City.findByIdAndUpdate(
            req.params.cityId,
            //$push is a convention of mongoose
            //we push our createdPost, as the value, into the posts key of the
            //city schemas object
            { $push: { posts: createdPost } },
            (err, updatedCity) => {
                if (err) return console.log(err)
            }
        ).catch(err =>{
            console.log(err)
            res.json({message:"custom error message"})
        })
        res.json(createdPost)
    })
})


//update route --> update a city
router.put('/:cityId/posts/:postsId', (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.postsId,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if (err) return console.log(err);

            /* res.json(updatedPost); */
            db.City.findById(req.params.cityId, (err, foundCity) => {
                /* console.log("req")
                console.log(req.params)
                console.log("foundcity")
                console.log(foundCity) */
                const postindex = foundCity.posts.findIndex((post) => post._id == updatedPost._id)
                foundCity.posts[postindex] = updatedPost
                console.log("updatedPost")
                console.log(updatedPost)
                let newPosts = foundCity.posts[postindex]
                console.log("foundCity.posts[postindex]")
                console.log(foundCity.posts[postindex])
                db.City.findByIdAndUpdate(
                    req.params.cityId,
                    { $set: { posts: newPosts } },
                    (err, updatedCity) => {
                        if (err) return console.log(err)
                        res.json(updatedPost)
                    }
                );
            })

            /* db.City.findByIdAndUpdate(
                req.params.cityId,
                { $set: { posts: updatedPost } },
                (err, updatedCity) => {
                    if (err) return console.log(err)
                    res.json(foundPost)
                }
            ) */
        });
});



//delete route --> delete a city
router.delete('/:cityId/posts/:postsId', (req, res) => {
    /* db.Post.findByIdAndUpdate(req.params.postsId, (err, deletedPost) => {
        if (err) return console.log(err);
        console.log(deletedPost)
        res.json(deletedPost)
    }) */
    db.Post.findByIdAndDelete(req.params.postsId, (err, foundPost) => {
        console.log(foundPost)
        db.City.findByIdAndUpdate(
            req.params.cityId,
            //$push is a convention of mongoose
            //we push our createdPost, as the value, into the posts key of the
            //city schemas object
            { $pull: { posts: foundPost } },
            (err, updatedCity) => {
                if (err) return console.log(err)
                res.json(foundPost)
            }
        )
    })


})




////////////////////after MVP
//update route

//delete route 
//will we want to make sure that we delete its place in the City's posts array too, or is that 
//automatically done when we delete a singular post?



module.exports = router;