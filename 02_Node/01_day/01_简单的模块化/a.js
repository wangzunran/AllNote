//require是一个方法
//它的作用hi用来加载模块的
//在node中 没有全局作用域 只有模块作用域
//      外部访问不到内部 内部访问不到外部
//既然是模块作用域 那如何让模块与模块之间通信（看02_加载与导出文件）


//在node中 模块有三种：
//1.具有的核心模块，例如fs、http
//2.用户自己编写的文件模块
//      相对路径必须加.
//

var foo ='aaa';
function add(x,y){
    return x + y;
}
console.log('a start');
//可以省略后缀名.js
require('./b');
console.log('a end');

console.log('foo：'+foo);