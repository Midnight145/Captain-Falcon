const colors = require('colors/safe');

const initializeDatabase = require('./database').initializeDatabase;

const dbUrl = process.env.DATABASE_URL || 'mysql://root:rootpassword@localhost:3306/sequelize'; // local database

const dbOptions = {
    dialect: 'mysql',
    logging: false,
    pool: {
        maxConnections: 10,
        maxIdleTime: 120000
    }
};

initializeDatabase(dbUrl, dbOptions).then((db) => {
    const initializeRouter = require('./router').initializeRouter(db);
    initializeRouter(db).then(router => {
        console.log(colors.cyan('Server Initialized'));
        const address = router.address();
        console.log(colors.green('Address:', address.address, address.family));
        console.log(colors.green('Port:', address.port));
    }).catch(err => {
        console.log(colors.red('Error initializing router:'));
        console.error(err);
    });
}).catch(err => {
    console.log(colors.red('Error initializing database:'));
    console.error(err);
});