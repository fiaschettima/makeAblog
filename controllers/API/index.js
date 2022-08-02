// redirect to api routes
const router = require('express').Router();
// const postRoutes = require('./blogPosts');
// const commentRoutes = require('./comments');
const userRoutes = require('./user');

// router.use('./blogPost', postRoutes);
// router.use('/comments', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;