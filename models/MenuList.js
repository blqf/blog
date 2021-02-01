const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const MenuList = sequelize.define('MenuList', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  menuId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true,
  tableName: 'menu_list'
})

module.exports = MenuList;