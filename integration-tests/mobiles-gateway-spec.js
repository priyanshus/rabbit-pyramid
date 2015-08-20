var supertest = require('supertest');
    api = supertest('http://localhost:3000');

describe('Service Get /mobiles', function() {
  it('should return status code 200', function(done) {
    api.get('/mobiles')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200,done);
  });

  it('should return correct json response', function(done) {
    api.get('/mobiles')
    .set('Accept', 'application/json')
    .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done()
      });
  });
});
