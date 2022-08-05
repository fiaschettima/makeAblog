const router = require('express').Router();
const { User, Comment, BlogPost } = require('../models');

router.get('/', async (req,res) => {
    try{
        const posts = await BlogPost.findAll({
            include: User,
            attributes: {exclude: ['password']}    
        });
        const blogPost = posts.map((post) =>post.get({plain: true}));
        res.render('homepage',{
            blogPost,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});
router.get('/login',  (req,res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login')
});
module.exports = router;