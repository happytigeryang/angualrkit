const User = require('../models/User');

exports.getUserList = (req, res, next) => {
    User
        .getUserList()
        .then((users) => {
            res.status(200);
            res.json(users);
        })
        .catch(() => {
            res.status(500);
        })
}