const router = require('express').Router();
const frontend = router('./frontend')
const apiRoutes = require('./api');


router.use(frontend);
router.use('/api', apiRoutes);

module.exports = router;
