const express = require('express');
const morgan = require('morgan');
const path = require('path');
const gzipStatic = require('connect-gzip-static');

const initializeRouter = (db) => {

    const api = require('./api').api(db);

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

    return () => {
        return new Promise((resolve, reject) => {
            const instance = app.listen(process.env.PORT || 80, () => {
                console.log('\x1b[36m', 'Server Initialized:');
                console.log('\x1b[32m', instance.address(), '\x1b[0m');
            });
        });
    };

};

module.exports = {
    initializeRouter
};