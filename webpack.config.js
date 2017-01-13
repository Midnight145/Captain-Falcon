const prod = require('webpack.config.prod');
const dev = require('webpack.config.dev');

const development = process.env.NODE_ENV || 'development';

module.exports = development ? dev : prod;