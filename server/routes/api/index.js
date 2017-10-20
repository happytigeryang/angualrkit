const router = require('express').Router();

const users = require('./users');
const json = require('./json');
router.use(users);
router.use(json);
module.exports = router;