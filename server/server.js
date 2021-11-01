const express = require('express');
const path = require('path');
let app = express();

app.get('/', (req, res) => {
    // res.send('Hello from the web server side...');
    res.sendFile(path.join(_dirname, 'public/index.html'));
});

app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/css/styles.css'));
});

app.listen(3000);
