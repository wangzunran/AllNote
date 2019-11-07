//所有联网的程序都需要进行网络通信
//计算机中只有一个物理网卡 而且同一个局域网中 网卡的地址必须是唯一的 网卡是通过唯一的ip地址来进行定位的

//ip地址用来定位计算机
//端口号用来定位具体的应用程序
//所有需要联网通信的应用程都会占用一个端口号  端口号的范围 0-65536之间

// 服务器就是一台24小时不关机的电脑 里面有qq软件 微信软件 浏览器软件 Apache服务器软件等等应用程序
//每一台服务器用ip地址来区分 每一个应用程序用端口号来区分

// 这里的服务器是我用node里面的http自己创建的一台服务器（就是自己的这台电脑 所以使用的ip是自己电脑上的ip地址）


// 服务器也会根据ip地址和端口号来识别是哪台客户端里面的哪个端口号来访问自己的 例如
//2.监听request请求事件 设置请求处理函数
server.on('request',function (req,res) {
    console.log('收到请求了 请求路径是'+req.url);
    var url = req.url;
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
        res.end(JSON.stringify(products))//把数组转为字符串
    }

    console.log('请求我服务器的那台客户端的ip地址：'+ req.socket.remoteAddress);
    console.log('请求我服务器的那台客户端的端口号'+ req.socket.remotePort)

});
