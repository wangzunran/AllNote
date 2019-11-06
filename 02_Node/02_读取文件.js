//浏览器中的JavaScript是没有文件操作的能力的
//但是node中的JavaScript具有文件操作的能力
//fs是file-system的简写 就是文件系统的意思
//在node中如果想要进行文件操作，就必须要引入fs这个核心模块
//z在fs这个核心模块中 就提供了所有的文件操作相关的api

//1.使用require方法加载fs核心模块
var  fs = require('fs');

//2.读取文件
//第一个参数就是要读取的文件路径
//第二个参数就是一个回调函数
//成功：data：数据     error：null
//失败：data：undefined 没有数据  error：错误对象
fs.readFile('./data/hello.txt',function (error,data) {
    //文件中存储的其实都是二进制数据 0 1
    console.log(data); //这里为什么看到的不是01  原因是二进制数据转为16进制了
    //但是无论是二进制还是16进制，人类都不认识
    //所以我们可以通过toString方法把其转为我们认识的字符
    if(error){
        console.log('读取文件失败了')
    }else {
        console.log(data.toString())
    }
});