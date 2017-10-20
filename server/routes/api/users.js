const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/user', UserController.getUserList);

module.exports = router;