//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*aside==>actives*/
	r.tabSwitch({aBtn:".aside .actives ol li",aCut:".aside .actives ul li",bAutoPlay:true});
	/*aside==>experts*/
	r.tabSwitch({aBtn:".aside .experts ol li",aCut:".aside .experts ul li",bAutoPlay:true});
})