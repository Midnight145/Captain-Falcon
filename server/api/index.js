const express = require('express');

const api = (db) => {
    const library = require('./library').library(db);

    const router = express.Router();

    router.use('/library', library);

    router.get('*', (req, res) => {
        res.sendStatus(404);
    });

    return router;
};

module.exports = {
    api
};