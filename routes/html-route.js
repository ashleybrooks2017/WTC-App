const path = require('path');

module.exports = function(app)
{
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'index.html'));
    });

    app.get('/planner', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'index.html'));
    });

    app.get('/organizer', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'organizerView.html'));
    });

    app.get('/schedule', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'schedule.html'));
    });
}
