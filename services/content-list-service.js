const ContentList = require('../models/ContentList.js');
const filters = require('../tools/filters.js');
const validate = require('validate.js');

// 获取所有文章
module.exports.getAllContents = async () => {
  const result = await ContentList.findAndCountAll()
  return {
    count: result.count,
    rows: JSON.parse(JSON.stringify(result.rows))
  }
}

//获取某一篇文章
module.exports.getOneContent = async (id) => {
  const result = await ContentList.findByPk(id);
  return result ? result.toJSON() : null;
}

// 新增文章
module.exports.addContent = async (infoObj) => {
  // 数据过滤
  infoObj = filters.objFilter(infoObj, 'contentTitle', 'briefIntro', 'allContent', 'contentId');
  // 数据验证
  const rules = {
    contentTitle: {
      type: 'string',
      presence: {
        allowEmpty: false
      },
      length: {
        minimum: 1,
        maximum: 15
      }
    },
    briefIntro: {
      type: 'string',
      presence: {
        allowEmpty: false
      }
    },
    allContent: {
      type: 'string',
      presence: {
        allowEmpty: false
      }
    },
    contentId: {
      type: 'integer',
      presence: {
        allowEmpty: false
      },
      numericality: {
        onlyInteger: true,
        strict: true,
        greaterThanOrEqualTo: 0
      }
    }
  }
  await validate.async(infoObj, rules);
  // 数据处理
  let result = await ContentList.create(infoObj);
  // 数据返回
  result = result.toJSON();
  delete result.id;
  return result;
}

// 修改文章信息
module.exports.updateContent = async (id, infoObj) => {
  // 数据过滤
  infoObj = filters.objFilter(infoObj, 'contentTitle', 'briefIntro', 'allContent', 'contentId');
  console.log(infoObj);
  // 数据验证
  const rules = {
    contentTitle: {
      type: 'string',
      length: {
        minimum: 1,
        maximum: 15
      }
    },
    briefIntro: {
      type: 'string',
    },
    allContent: {
      type: 'string',
    },
    contentId: {
      type: 'integer',
      numericality: {
        onlyInteger: true,
        strict: true,
        greaterThanOrEqualTo: 0
      }
    }
  }
  await validate.async(infoObj, rules);
  const result = await ContentList.update(infoObj, {
    where: {
      id
    }
  });
  console.log(result);
  return {
    updateRows: result[0]
  };
}

// 删除一篇文章
module.exports.deleteOneContent = async (id) => {
  const result = await ContentList.destroy({
    where: {
      id
    }
  });
  return {
    deleteRows: result
  }
}