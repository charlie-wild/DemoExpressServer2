const apiRouter = require('express').Router();
const {
  getAmericanFootballStats
} = require('../Controllers/getControllers.js')

apiRouter.get('/AmericanFootballStats', getAmericanFootballStats);




module.exports = apiRouter;