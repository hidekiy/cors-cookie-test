/*jslint node: true*/
/*global describe, it*/
'use strict';
var chai = require('chai'),
	app = require('../app'),
	request = require('supertest');

describe('app', function () {
	it('should respond /get', function (done) {
		request(app)
			.get('/get')
			.expect(200, done);
	});
});
