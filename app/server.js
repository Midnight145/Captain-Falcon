const express = require('express');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const root = dev ? './dev' : './prod';

const app = express();

app.use('/js', express.static(path.resolve(root, 'js')));

app.get('*', function (req, res) {
    res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 80);