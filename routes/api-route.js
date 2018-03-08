module.exports = function(app, connection)
{
    app.get('/api/events', (req, res) => {
        connection.query('SELECT * FROM itinerary', function (error, results, fields) {
            if (error)
            {
               res.append(500).send("An error occured in the mySQL database."); 
            }
            else{
                res.json(results);
            }
          });
    });
    app.post('/api/events', (req, res) => {
        connection.query('INSERT INTO itinerary (meetingname, roomnumber,time) VALUES (?, ?, ?)', [req.body.meetingname, req.body.roomnumber, req.body.time], function (error, results, fields) {
            if (error)
            {
               res.append(500).send("An error occured in the mySQL database."); 
            }
            else{
                connection.query('SELECT * FROM itinerary', function (error, results, fields) {
                    if (error)
                    {
                       res.append(500).send("An error occured in the mySQL database."); 
                    }
                    else{
                        res.json(results);
                    }
                  });
            }
          });
    });
}