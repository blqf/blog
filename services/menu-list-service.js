const MenuList = require('../models/MenuList.js');
const validate = require('validate.js');
const filters = require('../tools/filters.js');

// 获取所有菜单标题
module.exports.getAllMenuTitles = async () => {
  // 数据处理
  const { count, rows } = await MenuList.findAndCountAll({
    attributes: ['title', 'menuId']
  });
  // 数据返回
  return {
    count,
    rows: JSON.parse(JSON.stringify(rows))
  }
}

// 添加菜单标题
module.exports.addMenuTitle = async (infoObj) => {
  // 数据过滤
  infoObj = filters.objFilter(infoObj, 'title', 'menuId')
  // 数据验证
  const rules = {
    title: {
      type: 'string',
      presence: {
        allowEmpty: false
      },
      length: {
        minimum: 1,
        maximum: 15
      }
    },
    menuId: {
      type: 'integer',
      presence: {
        allowEmpty: false
      },
      numericality: {
        onlyInteger: true,
        strict: true
      },
    },
  }
  await validate.async(infoObj, rules);
  // 数据接收
  const title = infoObj.title;
  const menuId = infoObj.menuId;
  // 数据处理
  const result = await MenuList.create({
    title,
    menuId
  });
  // 数据返回
  return result.toJSON();
}

// 修改菜单栏标题
module.exports.updateMenuTitle = async (id, infoObj) => {
  // 数据过滤
  infoObj = filters.objFilter(infoObj, 'title', 'menuId');
  // 数据验证
  const rules = {
    title: {
      type: 'string',
      length: {
        minimum: 1,
        maximum: 15
      }
    },
    menuId: {
      type: 'integer',
      numericality: {
        onlyInteger: true,
        strict: true
      },
    },
  }
  await validate.async(infoObj, rules);
  // 数据处理
  const result = await MenuList.update(infoObj, {
    where: {
      id
    }
  });
  // 数据返回
  return {
    updateRows: result[0]
  }
}

// 删除菜单标题
module.exports.deleteMenuTitle = async (id) => {
  const result = await MenuList.destroy({
    where: {
      id
    }
  });
  return {
    deleteRowNum: result
  };
}