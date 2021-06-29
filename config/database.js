const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize('heroku_6e3d4d1918875d3', 'b877a4978b95ed', '8db4b3e2', {
  host: 'us-cdbr-east-04.cleardb.com',
  dialect: 'mysql'
});

