const express = require('express');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const app = express();

app.use('/js', express.static('dev/js'));

app.get('*', function (req, res) {
    res.sendFile('index.html', { root: path.resolve('./dev') });
});

app.listen(process.env.PORT || 80);