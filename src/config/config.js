const development = require('./env/development');
const production = require('./env/production');
const env = process.env.NODE_ENV ? production : development;

module.exports = env;