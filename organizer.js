let mysql = require("mysql");
let express = require('express');
let app = express();


let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jose103115!",
    database:"meetings",
    charset: 'utf8'
});
 connection.connect(function(err) {
     if(err) {
         console.error('Error:' + err.stack);
         return;
     }
     console.log("Connected as id" + connection.threadId);
 });


 app.get('/', function (req, res) {
    res.send('GET request to the homepage');
    res.json(tableData);
  })



module.export = connection; 