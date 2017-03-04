const Sequelize = require('sequelize');
const colors = require('colors/safe');

const initializeModels = require('./models').initializeModels;

const initializeDatabase = (url, options) => {
    const db = new Sequelize(url, options);

    initializeModels(db);

    return new Promise((resolve, reject) => {
        db.sync().then(() => {
            console.log(colors.cyan('Database Initialized'));
            resolve(db);
        }).catch(err => {
            reject(err);
        });
    });
};

module.exports = {
    initializeDatabase
};