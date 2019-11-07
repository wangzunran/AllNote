//require 方法有两个作用
// 1.加载文件模块并执行里面的代码
// 2.拿到被加载文件模块导出的接口对象（例如文件b 里面用exports来导出的接口对象）
var fs = require('fs');
var bExports = require('./b');//能够拿到exports对象{}
console.log(bExports.foo);
console.log(bExports.add(10,3));
console.log(bExports.age);
bExports.readFile('./a.js');

fs.readFile('./a.js',function (err,data) {
    if(err){
        console.log('读取文件失败')
    }else {
        console.log(data.toString())//直接打印data是输出十六进制的数
    }
});
