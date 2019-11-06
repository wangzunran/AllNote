var http = require('http');

//1.创建server服务
var server = http.createServer();
//2.监听request请求事件 设置请求处理函数
server.on('request',function (req,res) {
     console.log('收到请求了 请求路径是'+req.url);
     res.end('hello node.js');

    // 1.获取请求路径
    // 2.判断路径处理响应

});
//3.绑定端口号 启动服务
server.listen(3000,function () {
    console.log('启动成功了')
});