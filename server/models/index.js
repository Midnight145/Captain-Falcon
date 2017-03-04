const Sequelize = require('sequelize');

const initializeModels = db => {
    const algSet = db.define('algset', {
        shortName: Sequelize.STRING,
        longName: Sequelize.STRING
    });

    const algSubSet = db.define('algsubset', {

    });

    const algCaseToSubSet = db.define('algcasetosubset', {

    });

    const algCase = db.define('algCase', {

    });

    const alg = db.define('alg', {
        algorithm: Sequelize.STRING,
        _case: Sequelize.INTEGER
    });

    algCase.belongsToMany(algSubSet, { through: algCaseToSubSet });
    algSubSet.belongsToMany(algCase, { through: algCaseToSubSet });
};

module.exports = {
    initializeModels
};