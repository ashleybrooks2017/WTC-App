const path = require('path');

module.exports = function(app)
{
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'Planner.html'));
    });

    app.get('/planner', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'Planner.html'));
    });

    app.get('/organizer', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'organizer.html'));
    });

    app.get('/organizer', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'schedule.html'));
    });
}