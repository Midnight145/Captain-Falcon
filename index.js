const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 80));

app.get('/', function (req, res) {
    res.send('Hello Cubers!');
});

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port') + '!');
});