var http = require('http');

//1.创建server服务
var server = http.createServer();
//2.监听request请求事件 设置请求处理函数
server.on('request',function (req,res) {
     console.log('收到请求了 请求路径是'+req.url);
     // res.end('hello node.js');

    // 1.获取请求路径
    //req.url获取到的是端口号之后的那一部分路径
    //也就是说所有的url都是以 /开头的
    // 2.判断路径处理响应
    var url = req.url;
    // if(url === '/'){
    //     res.end('index page')
    // }else if(url === '/login'){
    //     res.end('login page')
    // }else{
    //     res.end('404 Not Found')
    // }

    if(url === '/products'){
        var products = [
            {
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },{
                name:'苹果',
                price:8888
            },
        ];
        //响应内容只能是二进制数据或者字符串  数字 对象 数组 布尔值统统不行
        // res.end(123);//错误的
        //JSON.stringify([])  输出 "[]"
        //JSON.parse("[]")  输出 []
        res.end(JSON.stringify(products))//把数组转为字符串
    }


});
//3.绑定端口号 启动服务
server.listen(3000,function () {
    console.log('启动成功了')
});