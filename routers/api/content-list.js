const express = require('express');
const router = express.Router();
const contentListServ = require('../../services/content-list-service');

// 获取所有文章
router.get('/', async (req, res) => {
  const result = await contentListServ.getAllContents()
  res.send({
    status: '获取成功',
    data: result
  });
})

// 获取一篇文章
router.get('/:id', async (req, res) => {
  const id = req.params.id
  const result = await contentListServ.getOneContent(id);
  res.send({
    status: result ? '获取成功': '文章不存在',
    data: result
  });
})

// 增加文章
router.post('/', async (req, res) => {
  const infoObj = req.body;
  try {
    const result = await contentListServ.addContent(infoObj);
    res.send({
      status: '增加文章成功',
      data: result
    })
  } catch (err) {
    res.send({
      status: 'error',
      data: err
    })
  }
})

// 修改菜单列表信息
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const infoObj = req.body;
  try {
    const result = await contentListServ.updateContent(id, infoObj);
    res.send({
      status: result.updateRows ? '修改文章成功' : '数据一致，未修改',
      data: result
    });
  } catch (err) {
    res.send({
      status: 'error',
      data: err
    });
  }
})

// 删除菜单列表项
router.delete('/:id', async (req, res) => {
  // 数据接收
  const id = req.params.id;
  // 数据处理
  const result = await contentListServ.deleteOneContent(id);
  res.send({
    status: result.deleteRows ? '删除成功' : '删除的数据不存在',
    data: result
  })
})

module.exports = router;