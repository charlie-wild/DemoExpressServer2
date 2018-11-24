const db = require('../db');


exports.getAmericanFootballStats = (req, res, next) => {
  db.many('SELECT * FROM american_football_action_participants;')
    .then((result) => {
      res.status(200).json({
        result
      });
    }).catch(next);
}

exports.postAmericanFootballStats = (req, res, next) => {
  db.many('INSERT INTO american_football_action_participants ( american_football_action_play_id, person_id, participant_role, score_type, field_line, yardage, score_credit, yards_gained) VALUES (<$body.american_football_action_play_id>, <$body.person_id>, <$body.particpant_role>, <$body.score_type>, <$body.field_line>, <$body.yardage>, <$body.score_credit>, <$body.yards_gained>) RETURNING *;', req)
    .then((result) => {
      res.status(201).json({
        result
      });
    }).catch(next);
}