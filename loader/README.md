#这里是介绍如何编写符合自己的loader
rule
path
resolve

设置  
```webpack.config.js
//webpack.config.js
{
    test:/\.js$/,
    use:[
        {
            loader:path.resolve(),
            options:'aaa'
        }
    ]
}
```
Laoder 是支持链式操作的，链式操作的处理方式，就是每个loader只做改做的事情，纯粹的事情
``` loader.js
// base loader
module.exports = function(source){
    retur source
}
```
[官方文档](https://doc.webpack-china.org/contribute/writing-a-loader/)
