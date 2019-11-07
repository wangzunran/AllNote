var http = require('http');
var server = http.createServer();

server.on('request',function (req,res) {
    //在服务器默认发送的数据 其实是utf8编码方式
    //但是浏览器不知道我是utf8编码的内容
    //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    //中文操作系统默认是gbk编码
    //解决方式是正确告诉浏览器我给你发送的内容是什么编码
    //在http协议中,Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
    //text/plain是普通文本 text/html 是html格式的文本
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end('hello 世界');
});

server.listen(5000,function () {
    console.log('server is running...')
});