var fs = require('fs');

//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
//成功：error:null
//失败：error：错误对象
fs.writeFile('./data/你好.md','我是node',function (error) {
    if(error){//文件名不能出现一些特殊字符
        console.log('文件写入失败');
    }else {
        console.log('文件写入成功');
    }

});