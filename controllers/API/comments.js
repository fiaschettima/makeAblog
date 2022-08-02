//routes to add / delete comments
const router = require('express').Router();
const { Comment } = require('../../models');

// add comment route
router.post('/', async (req,res) => {
    try{
        const newComment = await Comment.create({
            content: req.body.content,
            // user_id: ? get from somewhere besides body
            //post_id: same here find where to pull id from
        });
    }catch(err){
        res.status(500).json(err);
    }
});
// update comment route
router.put('/', async (req,res) => {
    try{

    }catch(err){
        res.status(500).json(err);
    }
});
// delete comment route
router.delete('/', async (req,res) => {
    try{

    }catch(err){
        res.status(500).json(err);
    }
});