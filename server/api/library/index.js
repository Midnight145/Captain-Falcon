const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');

const db = require('../../database');

const getAllSets = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT id, long_name, short_name FROM sets;', (err, rows, fields) => {
            if (err) {
                reject(err);
            }
            resolve(rows, fields);
        });
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