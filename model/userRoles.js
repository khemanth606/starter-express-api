const sequelize = require('../util/database');

const Sequelize = require('sequelize');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

});

module.exports = Category;
