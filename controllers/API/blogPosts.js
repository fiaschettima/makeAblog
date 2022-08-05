const router = require('express').Router();
const { BlogPost, Comment } = require('../../models')

// get all posts
router.get('/', async (req,res) => {
    try{
        const postData = await BlogPost.findAll()
        if(!postData){
            res.status(404).json({message: 'Theres No Posts'})
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err);
    }
});
// get one post
router.get('/:id', async (req,res) => {
    try{
        const postData = await BlogPost.findAll({
            where:{
                id: req.params.id
            },
      
        });
      
        if(!postData){
            res.status(404).json({message: 'Cant find this Posts'})
            return;
        };
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err);
    }
});
// add post
router.post('/', async (req,res) => {
    try{
        const postData = await BlogPost.create({
                user_id: req.session.userId,
                post_title: req.body.title,
                post_content: req.body.content
            }
        )
        if(!postData){
            res.status(404).json({message: 'Theres No Posts'})
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err);
    }
});
// update post
router.put('/:id', async (req,res) => {
    try{
        const postData = await BlogPost.update(
            {     post_title: req.body.title,
                post_content: req.body.content
            },
            {where:{id: req.params.id}}
        )
        if(!postData){
            res.status(404).json({message: 'Post not found'})
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err);
    }
});
// delete post
router.delete('/:id', async (req,res) => {
    try{
        const delPost = await BlogPost.destroy({
            where:{
                id: req.params.id
            }
        });
        if(!delPost){
            res.status(404).json({message: 'No comment found to delete'});
            return;
        };
        res.status(200).json(delPost)
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;