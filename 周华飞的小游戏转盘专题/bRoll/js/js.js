//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){	
	/*main*/
	r.tabSwitch({aBtn:"#main ol li",aCut:"#main ul li",oPrev:"#main .prev",oNext:"#main .next",bRoll:true,bAutoPlay:true});
})