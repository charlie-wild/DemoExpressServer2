const app = require('./app.js');


app.listen(9090, (err) => {
  if (err) console.log('error on connection');
  console.log('connected on port 9090');
})