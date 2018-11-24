const apiRouter = require('express').Router();
const {
  getAmericanFootballStats,
  postAmericanFootballStats
} = require('../Controllers/getControllers.js')

apiRouter.get('/AmericanFootballStats', getAmericanFootballStats);
apiRouter.post('/AmericanFootballStats', postAmericanFootballStats);




module.exports = apiRouter;