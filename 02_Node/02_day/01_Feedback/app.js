// app application应用程序
// 把当前模块所有的依赖声明到文件模块最上面
//为了让目录结构保持统一清晰，所以我们约定 把所有的html文件都收到views中
//我们为了方便的统一处理这些静态资源 所以我们约定把所有的静态资源存放在public中 把public目录下的所有资源开发出去
//哪些资源能被用户访问 哪些资源不能被用户访问 我们就可以很灵活的根据代码控制
var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('art-template');
var comments=[
    {
        name:'kun',
        message:'没有意外',
        dataTime:'2019/11/8'
    },{
        name:'kun2',
        message:'没有意外',
        dataTime:'2019/11/8'
    },{
        name:'kun3',
        message:'没有意外',
        dataTime:'2019/11/8'
    },{
        name:'kun4',
        message:'没有意外',
        dataTime:'2019/11/8'
    },
]
http.createServer(function (req,res) {
    //使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转为对象，用query属性来访问
    var parseObj = url.parse(req.url,true);
    //单独获取不包含查询字符串的路径部分（该路径不包含？之后的内容）
    var pathname = parseObj.pathname;

    if(pathname === '/'){
        fs.readFile('./views/index.html',function (err,data) {
            if(err){
                return res.end('404 Not Found')
            }
            var htmlStr = template.render(data.toString(),{
                comments:comments
            });
            res.end(htmlStr)
        })
    }else if(pathname === 'post'){
        fs.readFile('./views/post.html',function (err,data) {
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }else if(pathname.indexOf('/public/') ===0 ){
        //  /public/css/main.css
        //  /public/js/main.js
        //  /public/lib/jquery.js
        // 统一处理 ：
        // 如果请求路径是以 /public/开头的，则我认为你要获取public目录下的文件
        // 所以我们直接可以把请求路径当做文件路径来直接读取
        fs.readFile('.' + pathname,function (err,data) {
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        });
    }else{
        //其他的都处理成404找不到
        fs.readFile('./views/404.html',function (err,data) {
            res.end(data);
        })
    }
}).listen(3000,function () {
    console.log('running...')
});