const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const ContentList = sequelize.define('ContentList', {
  contentTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  briefIntro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  allContent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  updatedAt: false,
  createdAt:false,
  paranoid: true,
  tableName: 'content_list'
});

module.exports = ContentList;