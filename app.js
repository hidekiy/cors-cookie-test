'use strict';
var express = require('express'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');

(function main() {
	var app = express();

	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(morgan('combined'));

	app.options('/post', function (req, res) {
		res.set('Access-Control-Allow-Origin', req.get('origin'));
		res.set('Access-Control-Allow-Methods', 'GET, POST');
		res.send({ok: true});
	});

	app.post('/post', function (req, res) {
		var data = req.body.data;
		console.log('data', data);

		res.set('Access-Control-Allow-Origin', req.get('origin'));
		res.set('Access-Control-Allow-Credentials', 'true');
		res.cookie('state', data, {expires: new Date(Date.now() + 1000 * 3600 * 24), httpOnly: true});
		res.send({ok: true});
	});

	app.get('/get', function (req, res) {
		res.set('Access-Control-Allow-Origin', req.get('origin'));
		res.set('Access-Control-Allow-Credentials', 'true');
		res.send({state: req.cookies.state});
	});
	
	module.exports = app;
}());
