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
	r.scrollAddActive('.content');
	//r.addSpan('.til h3');
	//r.delayImg('#container img');
	$('#wrap').rFixed('#content');
	r.tabSwitch({oParent:".cut",dir:'top',bAutoPlay:true,timing:7000});
})