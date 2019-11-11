// app application应用程序
// 把当前模块所有的依赖声明到文件模块最上面
//为了让目录结构保持统一清晰，所以我们约定 把所有的html文件都收到views中
//我们为了方便的统一处理这些静态资源 所以我们约定把所有的静态资源存放在public中 把public目录下的所有资源开发出去
//哪些资源能被用户访问 哪些资源不能被用户访问 我们就可以很灵活的根据代码控制
var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');
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
];
//pinglun?name=kun&message=没有意外
// 对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
//所以你可能通过去判断完整的url路径去判断
//结论：对于我们来讲，，其实只需要判定？前面的/pinglun
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
    }else if( pathname === '/pinglun'){
        //注意：这个时候无论/pinglun?xxx之后是什么 我都不用管
        //console.log('收到表单请求了',parseObj.query);

        //一次请求对应一次响应 响应结束这次请求也就结束了
        //res.end(JSON.stringify(parseObj.query));

        //我们已经使用url模块的parse方法把请求路径中的查询字符串解析成了一个对象
        //所以接下来要做的是：
        // 1.获取表单提交的数据parseObj.query
        // 2.生成当前时间日期到数据对象中，然后存储到数组中
        // 3.让用户重定向跳转到首页
        //      当用户重新请求/ 的时候 我数组中的数据已经发生变化了，所以用户看到的页面也要更新
        var comment = parseObj.query;
        comment.dataTime = '';
        comment.unshift(comment);//往头追加

        //如何通过服务器让客户端重定向？
        // 1.状态码设置为302临时重定向
        // 2.在响应头中通过Location告诉客户端往哪儿重定向
        // 如果客户端发现收到服务器的响应状态码(默认是200)是302就会自动去响应头中找location，然后对该地址发新的请求
        // 所以你就能看到客户端自动跳转了
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }else{
        //其他的都处理成404找不到
        fs.readFile('./views/404.html',function (err,data) {
            res.end(data);
        })
    }
}).listen(3000,function () {
    console.log('running...')
});