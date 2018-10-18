/**
 * Created by zhouhuafei on 15/9/30.
 */
console.log('123');
function Node() {
        this.name = 'node';
}
Node.prototype = {
        constructor: Node,
        showName: function () {
                console.log('this.name:' + this.name);
        }
};
var obj = new Node();
obj.showName();

//提供其他模块访问此模块的接口(推荐),且module.exports可以直接写成exports
//错误的写法(不能把module.exports或者exports直接赋值给别的对象,因为这样做会断开module.exports和exports之间的引用)
//如果按照错误的写法,那么module.exports才是此模块对外的正确的接口
/*module.exports = {obj: obj};
 exports.b = 'yes';*/
//正确的写法(直接给module.exports或者exports添加属性,但是不能直接给module.exports或者exports赋值)
module.exports.obj = obj;
exports.b = 'yes';

console.log('module.exports===exports:' + (module.exports === exports));

global.obj = obj;//通过全局对象global进行提供接口(不推荐)

var a = '456';//nodeJs一个文件就是一个模块，所以这个a是当前模块下的变量，所以他不是全局对象下的a
console.log('global.a:' + global.a);

global.a = '999';
console.log('global.a:' + global.a);

console.log('__filename:' + __filename);//当前文件被解析后的绝对路径(__filename看似是全局的,其实是模块的)
console.log('__dirname:' + __dirname);//当前文件被解析后目录的绝对路径(__dirname看似是全局的,其实是模块的)

var c = '666';



