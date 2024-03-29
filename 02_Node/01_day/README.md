# Node.js第一天
# 使用命令：node 文件名
## 上午总结
- Node.js是什么
    + JavaScript运行时
    + 既不是语言，也不是框架，它是一个平台
- Node.js中的JavaScript
    + 没有BOM、DOM
    + EcmaScript基本的JavaScript语言部分
    + 在Node中为JavaScript提供了一些服务器级别的api
        * 文件操作的能力
        * http服务的能力
## 总结
- Node中的JavaScript
    + EcmaScript
        * 变量
        * 方法
        * 数据类型
        * 内置对象
        * Array
        * Object
        * Date
        * Math
    + 模块系统
        * 在Node中没有全局作用域的概念
        * 在Node中，只能通过require方法来加载执行多个JavaScript脚本文件
        * require 加载只能执行其中的代码，文件与文件之间由于是模块作用域，所以不会污染的问题
            - 模块完全是封闭的
            - 外部无法访问内部
            - 内部也无法访问外部
        * 模块作用域固然带来了一些好处 可以加载执行多个文件 可以完全避免变量命名冲突污染
        * 但是某些情况下 模块与模块是需要进行通信的
        * 在每个模块中都提供了一个对象exports
        * 该对象默认是一个 空对象
        * 你要做的就是把需要被外部访问使用的成员动手挂载到exports接口对象中
        * 然后谁来require这个模块 谁就可以得到模块内部的exports接口对象
    + 核心模块
        * 核心模块是由Node提供的一个个的具名的模块 他们都有自己特殊的名称标识
            - fs 文件操作模块
            - http 网络服务构建模块
            - os 操作系统信息模块
            - path 路径处理模块
            - 。。。。
        * 所有核心模块在使用的时候都必须先使用require方法来加载 才能使用
            - 例如 var fs = require('fs');
- http
    + require
    + 端口号
        * ip地址定位计算机
        * 端口号定位具体的应用程序
    + Content-Type
        * 服务器最好把每次响应的数据是什么内容类型都告诉客户端 而且要正确告诉
        * 不同的资源对应的Content-Type 是不一样 具体参照http://tool.oschina.net/commons
        * 对于文本类型的数据 最好都加上编码 防止中文解析乱码问题
    + 通过网络发送文件
        * 发送的并不是文件 本质上是发送的文件的内容
        * 当浏览器收到服务器响应内容之后 就会根据你的Content-Type进行对应的解析处理
