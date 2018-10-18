//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*dowebok*/
$(function(){
	setTimeout(function(){
		$('#dowebok').addClass('active');
	},30);
});
/*fullpage*/
$(function(){
	$('#dowebok').fullpage({
		'verticalCentered': false,//内容是否垂直居中
		'css3': true,//是否使用 CSS3 transforms 滚动
		'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],//section背景色
		'anchors': ['page1', 'page2', 'page3', 'page4'],//人家建议要带上这个啦,那就带上呗
		'navigation': true,//的项目导航
		'navigationPosition': 'right',//的项目位置
		'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],//的项目提示
		'slidesNavigation':true,//左右滑块的项目导
		//'loopHorizontal':true,//左右滑块是否循环滚动(默认为true)航
		//'continuousVertical':true//是否循环滚动
	})
	setInterval(function(){
		//$.fn.fullpage.moveSlideRight();//左右滑块是否自动滚动
		//$.fn.fullpage.moveSectionDown();//是否自动滚动
	},10000)
})