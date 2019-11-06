//1.加载http核心模块
var http = require('http');

//2.使用http.creacteServer()方法创建一个web服务器
var server = http.createServer();


//request请求事件处理函数，需要接收两个参数
//request请求对象：
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//response响应对象：
//      响应对象可以用来给客户端发送响应消息
server.on('request',function (request,response) {
    console.log('收到客户端的请求了，请求路径是：'+request.url)//在终端打印

    //response对象有一个方法：write可以用来给客户端发送响应数据
    //write可以使用多次 但是最后一次一定要用end来结束响应 否则客户端会一直等待
    response.write('hello');//客户端打印出hello  屏幕上面打印 可以给用户看
    response.write('node.js');

    //告诉客户端，我的话说完了 你可以呈递给用户了
    response.end()
});

// 4.绑定端口号 启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功了，可以访问端口号了')
});