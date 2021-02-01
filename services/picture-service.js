const Picture = require('../models/Picture.js');
const filters = require('../tools/filters.js');
const validate = require('validate.js');

// 获取所有相册
module.exports.getAllPicture = async () => {
  const result = await Picture.findAndCountAll()
  return {
    count: result.count,
    rows: JSON.parse(JSON.stringify(result.rows))
  }
}

//获取某一相册
module.exports.getOnePicture = async (id) => {
  const result = await Picture.findByPk(id);
  return result ? result.toJSON() : null;
}

// 新增相册
module.exports.addPicture = async (pictureObj) => {
  // 数据过滤
  pictureObj = filters.objFilter(pictureObj, 'imgUrl', 'intro');
  // 数据验证
  const rules = {
    imgUrl: {
      type: 'string',
      presence: {
        allowEmpty: false
      }
    },
    intro: {
      type: 'string',
      presence: {
        allowEmpty: false
      }
    }
  }
  await validate.async(pictureObj, rules);
  const result = await Picture.create(pictureObj)
  return result.toJSON();
}

// 修改相册信息
module.exports.updatePicture = async (id, pictureObj) => {
  // 数据过滤
  pictureObj = filters.objFilter(pictureObj, 'imgUrl', 'intro');
  // 数据验证
  const rules = {
    imgUrl: {
      type: 'string'
    },
    intro: {
      type: 'string'
    }
  }
  await validate.async(pictureObj, rules);
  const result = await Picture.update(pictureObj, {
    where: {
      id
    }
  });
  return {
    updateRows: result[0]
  };
}

// 删除某一相册
module.exports.deleteOnePicture = async (id) => {
  const result = await Picture.destroy({
    where: {
      id
    }
  });
  return {
    deleteRows: result
  }
}