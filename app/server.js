const express = require('express');
const morgan = require('morgan');
const gzipStatic = require('connect-gzip-static');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const root = dev ? './dev' : './prod';

const app = express();

app.use(morgan('dev'));

const static = dev ? express.static : gzipStatic;

[ 'js', 'css', 'images' ].forEach((route) => {
    app.use('/' + route, static(path.resolve(root, route), { index: false }));
});

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 80);