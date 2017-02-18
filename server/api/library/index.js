const express = require('express');
const bodyparser = require('body-parser');

const db = require('../../index');

const getAllSets = () => {
    return new Promise((resolve, reject) => {
        db.models.set.findAll().then((data) => {
            resolve(data);
        })
    });

};

const library = express.Router();

library.get('/', (req, res) => {
    getAllSets().then((rows, fields) => {
        res.json(rows);
    }).catch((err) => {
        res.sendStatus(500);
        console.error(err);
    });
});

module.exports = library;