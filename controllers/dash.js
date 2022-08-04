const router = require('express').Router();
const { User, Comment, BlogPost } = require('../models');
const withAuth = require('../utils/authorization')

router.get('/',withAuth, async (req,res) => {
    try{
        const posts = await BlogPost.findAll({
            where:{
                'user_id': req.session.userId
            },
            include: User,
            attributes: {exclude: ['password']}    
        });
        console.log(req.session)
        const blogPost = posts.map((post) =>post.get({plain: true}));
        console.log(blogPost)
        res.render('dashboard',{
            blogPost,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;