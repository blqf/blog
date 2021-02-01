const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const AboutMe = sequelize.define('AboutMe', {
  intro: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  createdAt :false,
  updatedAt: false,
  paranoid: true,
  tableName: 'about_me'
})

module.exports = AboutMe;