const db = require('../db');


exports.getAmericanFootballStats = (req, res, next) => {
  db.many('SELECT * FROM american_football_action_participants;')
    .then((result) => {
      res.status(200).json({
        result
      });
    }).catch(next);
}