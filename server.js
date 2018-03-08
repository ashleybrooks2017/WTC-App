const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

let connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Jose103115!",
  database:"meetings",
  charset: 'utf8'
});

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
require('./routes/api-route')(app, connection);
require('./routes/html-route')(app);

console.log('Connecting to mysql');
connection.connect(function(err) {
  if(err) {
      console.error('Error:' + err.stack);
      return;
  }
  else
  {
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
  }
});