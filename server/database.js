const Sequelize = require('sequelize');

const models = require('./models').models;

const initializeDatabase = (url, options) => {
    const db = new Sequelize(url, options);

    models.forEach((model) => {
        db.define(model.name, model.attributes);
    });

    return new Promise((resolve, reject) => {
        db.sync().then(() => {
            resolve(db);
        });
    });
};

module.exports = {
    initializeDatabase
};