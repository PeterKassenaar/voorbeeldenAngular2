var express = require('express'),
    jwt = require('express-jwt'),
    config = require('./config');

var app = module.exports = express.Router();

var jwtCheck = jwt({
    secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected', function (req, res) {
    var date = new Date().toLocaleTimeString();
    res.status(200).send('This is authenticated text. Request from ' + date);
});
