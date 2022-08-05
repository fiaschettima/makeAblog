//routes to add / delete comments
const router = require('express').Router();
const { Comment } = require('../../models');

// get comments
router.get('/', async (req,res) => {
    try{
        const commentData = await Comment.findAll();
        if(!commentData){
            res.status(404).json({message: 'No Comments for this post'});
            return;
        }
        res.status(200).json(commentData);
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/:id', async (req,res) => {
    try{
        const commentData = await Comment.findAll({
            where:{
                id : req.params.id
            }
        });
        if(!commentData){
            res.status(404).json({message: 'No Comments for this post'});
            return;
        }
        res.status(200).json(commentData);
    }catch(err){
        res.status(500).json(err)
    }
})
// add comment route
router.post('/', async (req,res) => {
    try{
        const newComment = await Comment.create({
            content: req.body.content,
            // user_id: req.session.user_id,
            // post_id: req.body.post_id
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });
        res.status(200).json(newComment)
    }catch(err){
        res.status(500).json(err);
    }
});
// update comment route
router.put('/:id', async (req,res) => {
    try{
        const updateComment = await Comment.update(
            {content: req.body.content},
            {where:{id:req.params.id}}
        );
        if(!updateComment){
            res.status(404).json({message: 'No matching comment'});
            return;
        }
        res.status(200).json(updateComment);
    }catch(err){
        res.status(500).json(err);
    }
});
// delete comment route
router.delete('/:id', async (req,res) => {
    try{
        const deletedComment = await Comment.destroy({
            where:{
                id: req.params.id
            }
        });
        if(!deletedComment){
            res.status(404).json({message: 'No comment found to delete'});
            return;
        };
        res.status(200).json(deletedComment)
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;