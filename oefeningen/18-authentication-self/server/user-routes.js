var express = require('express'),
	_ = require('lodash'),
	config = require('./config'),
	jwt = require('jsonwebtoken');

var app = module.exports = express.Router();

////////////////////////////
// XXX: This should be a database of users :).
////////////////////////////
var users = [
	{id: 1, username: 'admin', password: 'admin'},
	{id: 2, username: 'admin', password: 'p@ssword'},
	{id: 3, username: 'peter', password: 'test'},
	{id: 4, username: 'user', password: 'letmein'}
];

////////////////////////////
// Create token, based on user.
////////////////////////////
function createToken(user) {
	return jwt.sign(_.omit(user, 'password'),
		config.secret, {expiresIn: 60 * 60 * 5});
}

////////////////////////////
// compose User object, based on request. Return user to caller
////////////////////////////
function getUserScheme(req) {

	var username;
	var type;
	var userSearch = {};

	// The POST contains a username and not an email
	if (req.body.username) {
		username = req.body.username;
		type = 'username';
		userSearch = {username: username};
	}
	// The POST contains an email and not an username
	else if (req.body.email) {
		username = req.body.email;
		type = 'email';
		userSearch = {email: username};
	}

	return {
		username  : username,
		type      : type,
		userSearch: userSearch
	}
}

////////////////////////////
// Add a new user to the 'database'
////////////////////////////
app.post('/users', function (req, res) {

	var userScheme = getUserScheme(req);

	if (!userScheme.username || !req.body.password) {
		return res.status(400).send("You must send the username and the password");
	}

	if (_.find(users, userScheme.userSearch)) {
		return res.status(400).send("A user with that username already exists");
	}

	var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
	profile.id = _.max(users, 'id').id + 1;

	users.push(profile);

	res.status(201).send({
		id_token: createToken(profile)
	});
});

////////////////////////////
// Create the session / token here
////////////////////////////
app.post('/sessions/create', function (req, res) {

	var userScheme = getUserScheme(req);

	if (!userScheme.username || !req.body.password) {
		return res.status(400).send("You must send the username and the password");
	}

	var user = _.find(users, userScheme.userSearch);

	if (!user) {
		return res.status(401).send({message: "The username or password don't match", user: user});
	}

	if (user.password !== req.body.password) {
		return res.status(401).send("The username or password don't match");
	}

	res.status(201).send({
		// Send more fields if desired. Currently only
		// the token is returned.
		id_token: createToken(user)
	});
});