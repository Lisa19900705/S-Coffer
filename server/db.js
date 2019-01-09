/*
 * @Author: Lisa 
 * @Date: 2019-01-01 21:09:02 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-02 14:46:12
 */

 //引入mongoose模块
const mongoose = require('mongoose');

//数据库连接地址 
const DB_URL = "mongodb://localhost:27017/myDb";

//数据库连接
mongoose.connect(DB_URL, { useNewUrlParser: true });

//连接成功终端显示消息
mongoose.connection.on("connected", () => {
    console.log('数据库链接成功');
});

//连接失败终端显示消息
mongoose.connection.on("error", () => {
    console.log('数据库链接失败');
});

//连接断开终端显示消息
mongoose.connection.on("disConnected", () => {
    console.log('数据库链接断开链接');
});

//创建一个Schema  每一个schema会一一对应mongo中的collection
const schema = mongoose.Schema;

//实例化一个Schema
const userSchema = new schema({
    id: String,
    nickname: String,
    phoneNumber: String,
    verificationCode: String
},{ versionKey: false });

const user=mongoose.model('users',userSchema)
module.exports=user