require('./MenuList.js');
require('./AboutMe.js');
require('./Picture.js');
require('./ContentList.js');

const sequelize = require('./db.js');
sequelize.sync({alter: true}).then(() => {
  console.log('所有模型同步完成');
})