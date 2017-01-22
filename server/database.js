const mysql = require('mysql');

const dbUrl = process.env.DATABASE_URL || 'mysql://root:rootpassword@localhost:3306/test3';
const db = mysql.createPool(dbUrl);

module.exports = db;