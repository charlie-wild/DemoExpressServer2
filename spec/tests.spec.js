const app = require('../app');
const {
  expect
} = require('chai');
const request = require('supertest');

describe('/api', () => {
  describe('/AmericanFootballStats', () => {
    it('GET - returns status 200 and an unfiltered list of play stats', () => {
      return request(app).get('/api/AmericanFootballStats').expect(200).then((res) => {
        expect(res.body.result).to.have.length(213);
      })
    });
  });
});