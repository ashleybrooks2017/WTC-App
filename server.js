const express = require('express');

const app = express();

const port = 3000;

require('./routes/api-route')(app);
require('./routes/html-route')(app);
app.use(express.static('public'));

app.listen(port, (err) => {
  if(err)
  {
    console.log('Something went wrong.');
  }
  else
  {
    console.log('App listening on port: ', port);
  }
})