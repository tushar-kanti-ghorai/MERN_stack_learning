const express = require('express');

const app = express();

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username !== 'Tushar' || password !== 'pass') {
         res.status(400).json({
            msg: 'Wrong username or password'
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
         res.status(400).json({
            msg: 'Wrong kidneyId'
        });
        return;
    }

    res.json({
        msg: 'Your kidney is fine'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
