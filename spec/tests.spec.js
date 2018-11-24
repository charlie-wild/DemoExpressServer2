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
    it('POST - adds a new entry to the play stats object', () => {
      const newPlayStats = {
        "id": 294,
        "american_football_action_play_id": 180,
        "person_id": 3924,
        "participant_role": "kicker",
        "score_type": null,
        "field_line": null,
        "yardage": 25,
        "score_credit": 5,
        "yards_gained": 40
      }
      return request(app).post('/api/AmericanFootballStats').send(newPlayStats).expect(201).then((res) => {
        expect(res.body.result).to.have.length(214);
      })
    })
  });
});