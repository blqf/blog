const express = require('express');
const router = express.Router();
const aboutMeServ = require('../../services/about-me-service.js');

// 获取“关于”信息
router.get('/', async (req, res) => {
  const result = await aboutMeServ.getIntro();
  res.send({
    status: '获取成功',
    data: result
  })
})

// 修改
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const contentObj = req.body;
  const result = await aboutMeServ.updateIntro(id, contentObj);
  res.send({
    status: result.updateRows ? '修改成功' : '数据一致，未修改',
    data: result
  })
});

module.exports = router;