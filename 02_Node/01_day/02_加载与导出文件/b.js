var foo ='bbb';
exports.foo='hello';
exports.add = function(x,y){
    return x + y;
};
function  add(x,y) {
    return x - y
}
exports.readFile = function (path,callback) {
    console.log('文件路径',path)
};
var age = 18;
exports.age = age;
