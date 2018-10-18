/**
 * Created by zhouhuafei on 15/10/1.
 */
//nodeJS引入一个模块

//(相对路径)
//require('./node1.js');

//(绝对路径)
var node1=require('/Users/zhouhuafei/Desktop/work/node/node1.js');

//不是绝对路径,也不是相对路径
var http=require('http');//加载nodeJS的核心模块,或者说是加载node_modules里的模块


//nodeJS模块加载时,文件查找机制的规则
/*
* 1.首先,按照加载模块的文件名称进行查找
* 2.如果没有找到,则自动在模块文件的名称后面加上.js后缀进行查找
* 3.如果还没有找到,则自动在模块文件的名称后面加上.json后缀进行查找
* 4.如果还没有找到,则自动在模块文件的名称后面加上.node后缀进行查找
* 5.找不到,会抛出一个错误
* */



//模块的概念(nodeJS一个文件就是一个模块,一个模块的内容,不能直接访问另一个模块的内容,可以通过以下方式进行访问)


//console.log(c);//调用另一个模块的变量，会报错

//此模块使用另一个模块的变量
console.log('a:'+a);//能弹出数值，是因为另一个模块中使用了global.a=999,但是我们并不建议这么做

//变量node1是返回值，表示另一个模块中的module.experts
console.log(node1);
console.log('node1:'+node1);
node1.obj.showName();//通过module.experts模块使用(推荐)
obj.showName();//通过global使用(不推荐)

var d=new Date();
setInterval(function(){
        console.log('现在是'+ d.getFullYear()+'年'+(d.getMonth()+1)+'月'+ d.getDate()+'日'+ d.getHours()+':'+ d.getMinutes()+':'+ d.getSeconds());
},1000);

