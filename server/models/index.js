const Sequelize = require('sequelize');

const models = [
    {
        name: 'sets',
        attributes: {
            shortName: Sequelize.STRING,
            longName: Sequelize.STRING
        }
    }
];

module.exports = {
    models
};