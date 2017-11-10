//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*createHtml5Element*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*nav*/
	r.flowNav({obj:'#nav-main',child:"#nav-main li",target:".target"});
	/*til*/
	r.addSpan('.til h2');
	/*content*/
	r.scrollAddActive('.content');
	/*f5*/
	r.f5(r.scrollAddActive('.content'));
	/*treatment*/
	r.tabSwitch({oParent:"#treatment",dir:"top"});
	/*effect*/
	r.tabSwitch({oParent:"#effect",dir:"top"});
	/*equipment*/
	r.tabSwitch({oParent:"#equipment"});
})