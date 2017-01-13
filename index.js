const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello Cubers!');
});

app.listen(process.env.PORT || 80);