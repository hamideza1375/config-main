// sprouter
//appget
const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/user', UserController.user)

module.exports = router
