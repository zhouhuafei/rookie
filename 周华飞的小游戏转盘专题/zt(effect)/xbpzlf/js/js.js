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
	r.flowNav({obj:"#nav",child:"#nav li",target:".target"});
	/*til*/
	r.sliderTil({oParent:".til",aTil:".til small"});
	/*step*/
	r.tabSwitch({oParent:"#step"});
	/*taboo*/
	r.tabSwitch({oParent:"#taboo"});
	/*explant*/
	r.tabSwitch({oParent:"#explant"});
	/*treatment*/
	r.tabSwitch({oParent:"#treatment"});
	/*taboo2*/
	r.tabSwitch({oParent:".taboo2"});
	/*notice*/
	r.sliderSwitch({oParent:"#notice"});
})