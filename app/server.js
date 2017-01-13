const express = require('express');
const morgan = require('morgan');
const path = require('path');

const dev = process.env.NODE_ENV === 'development';

const root = dev ? './dev' : './prod';

const app = express();

app.use(morgan('dev'));

app.use('/js', express.static(path.resolve(root, 'js'), { index: false }));
app.use('/css', express.static(path.resolve(root, 'css'), { index: false }));
app.use('/images', express.static(path.resolve(root, 'images'), { index: false }));

app.get('/js*', (req, res) => res.sendStatus(404));
app.get('/css*', (req, res) => res.sendStatus(404));
app.get('/images*', (req, res) => res.sendStatus(404));

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 80);