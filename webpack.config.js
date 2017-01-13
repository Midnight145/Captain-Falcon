const prod = require('./webpack.config.prod.js');
const dev = require('./webpack.config.dev.js');

const env = process.env.NODE_ENV || 'development';

module.exports = env === 'development' ? dev : prod;