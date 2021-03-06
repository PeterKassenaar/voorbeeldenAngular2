var logger = require('morgan'),
	http = require('http'),
	express = require('express'),
	errorhandler = require('errorhandler'),
	cors = require('cors'),
	dotenv = require('dotenv'),
	bodyParser = require('body-parser');

var app = express();

dotenv.load();

// Parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (err, req, res, next) {
	if (err.name === 'StatusError') {
		res.send(err.status, err.message);
	} else {
		next(err);
	}
});

if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
	app.use(errorhandler())
}

// Routing voor de server-app
app.use(require('./anonymous-routes'));
app.use(require('./protected-routes'));
app.use(require('./user-routes'));

// Start server op poort 3001
var port = process.env.PORT || 3001;

http.createServer(app).listen(port, function (err) {
	console.log('listening in http://localhost:' + port);
});

