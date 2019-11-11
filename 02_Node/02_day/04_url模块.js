var url = require('url');
var obj = url.parse('/pinglun?name=kun&message=没有意外');
var obj2 = url.parse('/pinglun?name=kun&message=没有意外',true);
console.log(obj);
console.log(obj2);//这个打印出的query: [name:'kun',message:'没有意外'],
//控制台会打印出如下信息
// Url {
//         protocol: null,
//         slashes: null,
//         auth: null,
//         host: null,
//         port: null,
//         hostname: null,
//         hash: null,
//         search: '?name=kun&message=没有意外',
//         query: 'name=kun&message=没有意外',
//         pathname: '/pinglun',
//         path: '/pinglun?name=kun&message=没有意外',
//         href: '/pinglun?name=kun&message=没有意外'
// }

