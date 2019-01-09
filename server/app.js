/*
 * @Author: Lisa 
 * @Date: 2018-12-31 16:58:43 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-06 14:22:19
 */

const express = require('express');
//body-parser非常常用的一个express中间件，作用是对post请求的请求体进行解析
const bodyParser=require('body-parser');
//导入db.js
const user = require('./db.js');


const app = express();
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// 解析 application/json
app.use(bodyParser.json())

//处理静态目录
// app.use(express.static('www'));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();   //执行下一个中间件。
});

app.post('/auth/get_vcode',(req, res) => {
    const updataDataParam = [
        { phoneNumber: req.body.phoneNumber }, 
        { verificationCode : "000000", phoneNumber: req.body.phoneNumber}, 
        { upsert: true },
        (error, data) => {
            if(error){
                console.log('数据获取失败'+error);
            }else{
                res.json({
                    status:'200',
                    message:'success',
                    data: {
                        verificationCode: "000000"
                    }
                });
            }
        }
    ];
    user.update(...updataDataParam);
});
app.post('/auth/login',(req, res) => {
    //mongoose 数据查找
    user.find({phoneNumber: req.body.phoneNumber, verificationCode: req.body.verificationCode}).exec((error, data) => {
        if(error){
            console.log('数据获取失败'+error);
        }else{ 
            data.length > 0 ? res.json({
                status:'200',
                message:'success',
                data: {
                    token: randomWord(),
                    userInfo: data[0]
                }
            }) : res.json({
                status:'400',
                message:'verification code is not match.',
                data:{
                    errorCode : 'Err0001'
                }
            }) 
        }
    })
});
function randomWord(range = 20){
    var str = "";
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    // 随机产生
    for(var i=0; i<range; i++){
      var pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
    }
    return str;
}
  
app.listen(3000, () => console.log('Example app listening on port 3000!'));