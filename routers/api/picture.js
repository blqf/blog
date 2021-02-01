const express = require('express');
const router = express.Router();
const picServ = require('../../services/picture-service');

// 获取相册
router.get('/', async (req, res) => {
  const result = await picServ.getAllPicture()
  res.send({
    status: '获取相册成功',
    data: result
  });
});

// 获取一篇文章
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await picServ.getOnePicture(id);
  res.send({
    status: result ? '获取成功': '相册不存在',
    data: result
  });
})

// 增加相册
router.post('/', async (req, res) => {
  const infoObj = req.body;
  try {
    const result = await picServ.addPicture(infoObj);
    res.send({
      status: '增加相册成功',
      data: result
    })
  } catch (err) {
    res.send({
      status: 'error',
      data: err
    })
  }
})

// 修改相册信息
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const infoObj = req.body;
  try {
    const result = await picServ.updatePicture(id, infoObj);
    res.send({
      status: result.updateRows ? '修改相册成功' : '数据一致，未修改',
      data: result
    });
  } catch (err) {
    res.send({
      status: 'error',
      data: err
    });
  }
})

// 删除相册
router.delete('/:id', async (req, res) => {
  // 数据接收
  const id = req.params.id;
  // 数据处理
  const result = await picServ.deleteOnePicture(id);
  res.send({
    status: result.deleteRows ? '删除成功' : '删除的相册不存在',
    data: result
  })
})

module.exports = router;