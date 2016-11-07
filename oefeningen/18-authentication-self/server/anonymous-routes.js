var express = require('express');

var app = module.exports = express.Router();

app.get('/api/public', function(req, res) {
  res.status(200).send("This is public text - no auth required");
});
