var supertest = require('supertest')(require('../app.js'));


describe('routes', function() {

    it('GET /recipes/1 should return status 200', function() {
        return supertest
          .get('/recipes/1')
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(function(res) {
            expect(res.status).toEqual(200);
          });
      });

      it('GET /recipes/1 should return json with title "Fried Anchovies with Sage"', function() {
        return supertest
          .get('/recipes/1')
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(function(res) {
            expect(res.body.title).toEqual('Fried Anchovies with Sage');
          });
      });
})