//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=jQuery.noConflict();
r(function(){
	r('a').colorbox({
		'rel':'a',//不带的话没有左右箭头(貌似就是一个分组效果,这里应该就是指a组了,如果还有一个模块也用到了这个效果,可以取名为b组)
		'title':'自从学会了使用插件,我就开始怀疑人生,我的js到底学来有什么用',//标题
		//width:600,//包括边框的宽度,没有高度的话,高度就是自适应,
		//innerWidth:836,//不包括边框的宽度,没有高度的话,高度就是自适应,
		'open':true,//自动开启colorbox
		'slideshow':true,//自动切换
		'slideshowSpeed':5000//多久自动切换一次
	});	
})