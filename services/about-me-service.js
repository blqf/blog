const AboutMe = require('../models/AboutMe.js');
const filters = require('../tools/filters.js');
const validate = require('validate.js');

// 获取所有内容
module.exports.getIntro = async () => {
  let result = await AboutMe.findAndCountAll()
  const count = result.count;
  const rows = JSON.parse(JSON.stringify(result.rows))[0];
  delete rows.deletedAt;
  return {
    count,
    rows
  }
}


// 修改“关于”信息
module.exports.updateIntro = async (id = 1, contentObj) => {
  // 数据过滤
  contentObj = filters.objFilter(contentObj, 'intro');
  // 数据验证
  const rules = {
    intro: {
      type: 'string',
      presence: {
        allowEmpty: false
      }
    }
  }
  await validate.async(contentObj, rules);
  const result = await AboutMe.update(contentObj, {
    where: {
      id
    }
  });
  return {
    updateRows: result[0]
  };
}