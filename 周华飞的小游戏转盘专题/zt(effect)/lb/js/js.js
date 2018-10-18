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
	$('#banner').addClass('active');
	r.scrollAddActive('.content');
	r.flowNav({obj:"#navs-main",child:"#navs-main li",target:".target"});
})