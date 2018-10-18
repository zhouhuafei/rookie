//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*createHtml5Element
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');*/
var r=new Rookie();
//r.version();
r.addEvent(window,'load',function(){
	r.flowNav({obj:"#viscosity-flow",child:"#viscosity-flow li",target:".target"});
	r.scrollAddActive('.content');
	//r.delayImg('#container img');
	r.addSpan('.til h3');
	//r.tabSwitch({oParent:".step-main",bOpacity:true});
})
$(function(){
	/*equipment*/
	jQuery(".equipment").slide({mainCell:".e-main",autoPlay:true,effect:'fold'});
	/*case*/
	jQuery(".case").slide({mainCell:".bd",autoPlay:true,effect:"fold"});
	/*视频*/
	$('.video').click(function(){
		var index=$(this).index('.video');
		$(this).html('<iframe src=video.html#video'+index+' width=320 height=240 frameborder=0 scrolling=no></iframe');	
	})
})