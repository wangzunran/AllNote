//art-template
//art-template不仅可以在浏览器中使用 也可以在node中使用

//安装
// npm install art-template
// 该命令在哪执行就会把包下载到哪里 默认会下载到node_modues目录中 不能也不支持改

//在node中使用 art-template 模板引擎
//模板引擎最早就是诞生于服务器领域 后来才发展到了前端 node中使用就相当于在服务端中使用


//1.安装
//2.加载art-template  require('art-template');
//3.查文档 使用模板引擎的api

var template = require('art-template');

// template.render('模板字符串',{替换对象})
// var ret = template.render('hello{{name}}',{
//     name:'jack'
// });

// var tplStr = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <title>Title</title>
//     </head>
//     <body>
//         <p>大家好 我叫：{{ name }}</p>
//         <p>我今年{{ age }}岁了</p>
//         <p>我来自{{ province }}</p>
//         <p>我喜欢{{each hobbies}} {{ $value }} {{/each}}</p>
//     </body>
//     </html>
// `;
// var ret = template.render(tplStr,{
//     name:'jack',
//     age:'18',
//     province:'北京市',
//     hobbies:[
//         '写代码',
//         '听音乐',
//         '唱歌'
//     ],
// });


var fs = require('fs');
fs.readFile('./03_tpl.html',function (err,data) {
    if(err){
        return console.log('读取文件失败');
    }
    var tplStr = data.toString();
    var ret = template.render(tplStr,{
        name:'jack',
        age:'18',
        province:'北京市',
        hobbies:[
            '写代码',
            '听音乐',
            '唱歌'
        ],
    });
    console.log(ret);
});
