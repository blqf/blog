const express = require('express');
const router = express.Router();
const menuListServ = require('../../services/menu-list-service');

// 获取菜单列表
router.get('/', async (req, res) => {
  const result = await menuListServ.getAllMenuTitles()
  res.send(result);
})

// 增加菜单列表
router.post('/', async (req, res) => {
  const infoObj = req.body;
  try {
    const result = await menuListServ.addMenuTitle(infoObj);
    res.send({
      status: '增加菜单列表成功',
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
    const result = await menuListServ.updateMenuTitle(id, infoObj);
    res.send({
      status: result.updateRows ? '修改成功' : '数据一致，未修改',
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
  const result = await menuListServ.deleteMenuTitle(id);
  res.send({
    status: result.deleteRowNum ? '删除成功' : '删除的数据不存在',
    data: result
  })
})

module.exports = router;