const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// const mongodb = require('mongodb');
const http=require('http');
// const Router=require('./src/router/index.js');
// const db=require('./src/js/mongo.js');

// 获取Mongo客户端
// const MongoClient = mongodb.MongoClient;
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended:false}));
const loginRouter=require('./src/router/login.js');
app.use(loginRouter);

app.listen(2626,()=>{
	console.log('server star in port:2626');
})