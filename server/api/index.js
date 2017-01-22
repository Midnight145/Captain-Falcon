const express = require('express');

const library = require('./library');

const api = express.Router();

api.use('/library', library);

api.get('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = api;