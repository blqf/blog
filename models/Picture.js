const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Picture = sequelize.define('Picture', {
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  intro: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true,
  tableName: 'picture'
})

module.exports = Picture;