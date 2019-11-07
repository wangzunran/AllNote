var http = require('http');


var server = http.createServer();

var wwwDir = 'D:/Move/WWW';

server.on('request',function (req,res) {
    var url = req.url;
    fs.readFile('./00_template.html',function (err,data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        //1.如何得到wwwDir目录列表中的文件名和目录名
        //fs.readdir
        //2.如何将得到的文件名和目录名替换到template。html中
        //模板引擎
        //2.1在template.html中需要替换的地方预留一个特殊的标记(用来替换)
        //2.2根据files生成需要的html内容
        fs.readdir(wwwDir,function (err,files) {
            if(err){
                return res.end('Not Found wwwDir')
            }
            //2.1生成需要替换的内容
            var content = '';
            files.forEach(function (item) {
                //在es6中 反引号字符中使用${}来引用变量
                content += `
                <tr>
                    <td data-value='apple/'><a href="/D:/Move/www/apple/">${item}</a></td>
                    <td class="da" data-value="0"></td>
                    <td class="da" data-value="1">上午</td>
                </tr>
                `
            });
            //2.3 替换
            data = data.toString();
            //将普通字符串解析替换，浏览器看到的结果就不一样了
            data = data.replace('特殊的标记',content);
            //3. 发送响应
            res.end(data);
        });
    })
});

server.listen(3000,function () {

});