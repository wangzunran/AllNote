//1.结合fs发送文件中的数据
//2.Content-Type
// http://tool.oschina.net/commons
// 不同的资源对应的Content-Type不同
//图片不需要指定编码 一般只为字符数据才指定编码

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request',function (req,res) {
    var url = req.url;
    if(url === '/'){
        //url:统一资源定位符
        //一个url最终是要定位到一个资源的
        fs.readFile('./03_resource/index.html',function (err,data) {
            if(err){
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end('文件读取失败，请稍后重新读取');
            }else {
                res.setHeader('Content-Type','text/html; charset=utf-8');
                //data默认是二进制数据 可以通过 .toString()来识别咱字符串
                //res.end()支持两种数据类型 一种是二进制 一种是字符串 所以这里可以不用转换
                res.end(data);
            }
        })
    }else if(url === '/kun'){
        fs.readFile('./03_resource/kun.jpg',function (err,data) {
            if(err){
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end('文件读取失败，请稍后重新读取');
            }else {
                //图片不是字符数据存储 不需要指定编码
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    }
});

server.listen(5000,function () {
    console.log('server is running...')
});