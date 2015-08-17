var supertest = require('supertest');
    api = supertest('http://localhost:3000');

describe('Integration-Get /mobiles', function() {
  it('should return status code 200', function(done) {
    api.get('/mobiles')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200,done);
  });
});
