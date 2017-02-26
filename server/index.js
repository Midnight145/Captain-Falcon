const initializeDatabase = require('./database').initializeDatabase;

const dbUrl = process.env.DATABASE_URL || 'mysql://root:rootpassword@localhost:3306/sequelize'; // local database

const dbOptions = {
    dialect: 'mysql',
    logging: false
};

initializeDatabase(dbUrl, dbOptions).then((db) => {
    const initializeRouter = require('./router').initializeRouter(db);
    initializeRouter(db).catch(err => {
        console.error(err);
    });
});