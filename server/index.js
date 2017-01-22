const express = require('express');
const morgan = require('morgan');
const path = require('path');
const gzipStatic = require('connect-gzip-static');

const api = require('./api');

const dev = process.env.NODE_ENV === 'development';
const root = dev ? './dev' : './prod';
const serveStatic = dev ? express.static : gzipStatic;

const app = express();
app.use(morgan('dev'));

[ 'js', 'css', 'images' ].forEach((route) => {
    app.use([ '/' + route, '/' + route + '/*' ], serveStatic(path.resolve(root, route), { index: false }));
});

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

const instance = app.listen(process.env.PORT || 80, () => {
    console.info('Listening on port ' + instance.address().port);
});