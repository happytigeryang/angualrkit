var fs = require('fs');
var express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

app.get('/json', (req, res) => {
    setTimeout(function () {
        var data = JSON.parse(fs.readFileSync(__dirname + '/../client/assets/data/data.json', 'utf8'))
        res.json(data);
        res.end();
    }, 5000);

})

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
