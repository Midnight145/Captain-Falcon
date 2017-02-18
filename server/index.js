const express = require('express');
const morgan = require('morgan');
const path = require('path');
const gzipStatic = require('connect-gzip-static');

const initializeDatabase = require('./database').initializeDatabase;

const api = require('./api');

const dbUrl = process.env.DATABASE_URL || 'mysql://root:rootpassword@localhost:3306/sequelize';

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

initializeDatabase(dbUrl).then((db) => {
    module.exports = db;
    const instance = app.listen(process.env.PORT || 80, () => {
        console.info('Listening on port ' + instance.address().port + '\n');
    });
});