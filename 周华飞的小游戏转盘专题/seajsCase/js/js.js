// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
//==>'./'是当前默认目录(./可以省略),当前默认目录是网站根目录开始,此处就是指'seajsCase/'
//==>'../'表示上一层路径(在seajs.use()里表示服务器端路径,此处就是指'http://127.0.0.1/')
//==>sea.js放在哪里,哪里就是seajs的默认路径,此处就是指'seajsCase/js/'
//配置路径
seajs.config({
	//base:'./'			//==>改变了默认路径,把'seajsCase/js/'改为了'seajsCase/'		//==>不建议修改
});
//加载依赖文件并调用			//第一种使用方法
/*
seajs.use(['jq.js','rFixed.js'],function(){
	$('div').rFixed();
});*/
//加载自定义模块并调用			//第二种使用方法
seajs.use('test.js',function(ex){
	ex.popup();
})
//模块依赖模块				//第三种使用方法
//define(function(require,exports,module){})是用来定义模块的,需要单独放在一个js文件里使用,然后在其他文件中用seajs.use('模块路径')来引用
//define模块内部的依赖文件如果也是一个define模块,那么他的require('模块路径')的返回值就是他依赖的那么模块的exports对象,可以在当前模块define内部用变量存储,或者直接使用
//http://seajs.org/docs/