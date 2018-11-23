const app = require('express')();
const apiRouter = require('./Routers/api')
const bodyparser = require('body-parser');


app.use(bodyparser.json());

app.use('/api', apiRouter);


app.use((err, req, res, next) => {
  if (err) res.status(500).json({
    msg: err
  });
})




module.exports = app;