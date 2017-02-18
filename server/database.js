const Sequelize = require('sequelize');

const initializeDatabase = (url) => {
    const db = new Sequelize(url, {
        dialect: 'mysql'
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