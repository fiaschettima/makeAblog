const router = require('express').Router();
const apiRoute = require('./API');
const homePage = require('./home');
const dashboard = require('./dash')

router.use('/', homePage);
router.use('/dashboard', dashboard)
router.use('/api', apiRoute);

module.exports = router;
