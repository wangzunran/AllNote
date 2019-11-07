var fs = require('fs')
fs.readdir('D:/Move/WWW',function (err,files) {
    if(err){
        return console.log('目录不存在')
    }
    //目录下的文件名数组
    console.log(files)
})