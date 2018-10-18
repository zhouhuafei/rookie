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
	//r.flowNav({obj:"#viscosity-flow",child:"#viscosity-flow li",target:".target"});
	//r.addSpan('.til');
	r.scrollAddActive('.content');
	//r.delayImg('#container img');
	r.tabSwitch({oParent:".case",dir:'top'});
	(function(){
		$('.vedio').click(function(){
			$(this).html('<iframe src=vedio.html#vedio width=406 height=271 frameborder=no scrolling=no></iframe>')	
		})	
	})();
})