const fs=require('fs');
const router = require('express').Router();

router.get('/json', (req, res) => {
    setTimeout(function () {
        var data = JSON.parse(fs.readFileSync(__dirname + '/../../../client/assets/data/data.json', 'utf8'))
        res.json(data);
        res.end();
    }, 5000);
});

module.exports = router;