// 利用Express中的Router实现路由模块化
const express = require('express');
let Router = express.Router();
const mongodb = require('mongodb');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
Router.get('/login',(req,res)=>{

MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
    
    console.log("数据库已连接");
    let db = database.db('h5_1809');
    let user = db.collection('user');
    user.find({name:'peng'}).toArray((err,result)=>{
        // result：数据查询结果
        console.log(result)
        res.send(result);
    })
    
    database.close();
})
    
});
module.exports = Router;