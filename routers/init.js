const express = require('express');
const app = express();

// 处理地址不存在的情况
const history = require('connect-history-api-fallback');
app.use(history());

// 静态资源
const path = require('path');
app.use(express.static(path.resolve(__dirname, '../public')));

// cors处理跨域
var cors = require('cors')
app.use(cors());

// 处理application/x-www-urlencoded请求体
app.use(express.urlencoded({ extended: true }));

// 处理application/json请求体
app.use(express.json());

// 处理api
app.use('/api/menuList', require('./api/menu-list.js'));
app.use('/api/contentList', require('./api/content-list.js'));
app.use('/api/AboutMe', require('./api/about-me.js'));
app.use('/api/picture', require('./api/picture.js'));

// 错误处理
app.use(require('./middlewares/error-middleware.js'));

app.listen(5008, () => {
  console.log('监听了5008端口');
});