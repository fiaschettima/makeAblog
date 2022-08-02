const router = require('express').Router();
const apiRoute = require('./API');
// const homePage = require('./dashBoard');
// const dashBoard = require('./dashBoard')

// router.use('/', homePage);
// router.use('/dashboard', dashBoard)
router.use('/api', apiRoute);

module.exports = router;
