// Creates new express router instance
const router = require('express').Router();

//  loads the user-routes file
const userRoutes = require('./user-routes');
// loads the thought-routes file
const thoughtRoutes = require('./thought-routes');

// mounts the user routes on the /users path
router.use('/users', userRoutes);
// mounts the thought routes on the /thoughts path
router.use('/thoughts', thoughtRoutes);

module.exports = router;