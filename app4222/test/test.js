var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello EG20204222', function(done) {
        request(app).get('/will').expect('{ "response": "Hello EG20204222" }', done);
    });
});