// routes to update create and delet posts
const router = require('express').Router();
const { BlogPost } = require('../../models')

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
        const postData = await BlogPost.findByPk({
            where:{
                id: req.params.id
            }
        })
        if(!postData){
            res.status(404).json({message: 'Cant find this Posts'})
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err);
    }
});
// add post
router.post('/', async (req,res) => {
    try{
        const postData = await BlogPost.create({
                user_id: req.session.user_id,
                post_title: req.body.post_title,
                post_content: req.body.post_content
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
router.get('/:id', async (req,res) => {
    try{
        const postData = await BlogPost.update(
            {     post_title: req.body.post_title,
                post_content: req.body.post_content
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
router.get('/:id', async (req,res) => {
    try{
        const postData = await BlogPost.findByPk({
            where: {
                id: req.params.id
            }
        });
        if(!postData){
            res.status(404).json({message: 'Post not found'})
            return;
        }
        res.status(200).json({message: 'Post Deleted'},postData)
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;