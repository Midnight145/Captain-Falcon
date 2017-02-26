const express = require('express');
const bodyparser = require('body-parser');

const library = (db) => {
    const getAllSets = () => {
        return db.models.sets.findAll({
            attributes: ['id', 'shortName', 'longName']
        });
    };

    const router = express.Router();

    router.get('/', (req, res) => {
        getAllSets().then((rows, fields) => {
            res.json(rows);
        }).catch((err) => {
            res.sendStatus(500);
            console.error(err);
        });
    });

    return router;
};

module.exports = {
    library
};