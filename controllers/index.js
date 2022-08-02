const router = require('express').Router();
const apiRoute = require('./API');
const homePage = require('./dashBoard');

router.use('/', homePage);
router.use('/api', apiRoute);

module.exports = router;
