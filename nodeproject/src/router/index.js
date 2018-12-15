//把路由封装成模块
const express = require('express');
// 引入单独路由模块
// const userRouter = require('./user');
const loginRouter=require('./login.js');


let Router = express.Router();

// 关于登录的路由
Router.use('/login',loginRouter);

module.exports = Router;