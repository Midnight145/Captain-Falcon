const prod = require('./webpack.config.prod.js');
const dev = require('./webpack.config.dev.js');

const development = process.env.NODE_ENV || 'development';

module.exports = development ? dev : prod;