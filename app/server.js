const express = require('express');
const morgan = require('morgan');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const root = dev ? './dev' : './prod';

const app = express();

app.use(morgan('dev'));

[ 'js', 'css', 'images' ].forEach((route) => {
    app.use('/' + route, express.static(path.resolve(root, route), { index: false }));
    app.get('/' + route + '*', (req, res) => res.sendStatus(404));
});

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 80);