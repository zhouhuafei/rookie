//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*list*/
	r.flowNav({obj:'#list ol',child:'#list ol .ready',target:'.target',aCut:'#list ul li',oBtn:'#list ol li.last'});
	/*aside==>actives*/
	r.tabSwitch({aBtn:".aside .actives ol li",aCut:".aside .actives ul li",bAutoPlay:true});
	/*aside==>experts*/
	r.tabSwitch({aBtn:".aside .experts ol li",aCut:".aside .experts ul li",bAutoPlay:true});
})