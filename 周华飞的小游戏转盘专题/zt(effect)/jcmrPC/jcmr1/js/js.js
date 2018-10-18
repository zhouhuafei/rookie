//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){	
	/*banner*/
	r.tabSwitch({aBtn:"#banner ol li",aCut:"#banner ul li",bAutoPlay:true});	
	/*nav*/
	for(var i=1; i<=3;i++){
		r.tabSwitch({aBtn:"#nav ul.ul"+i+" em.abtns i",aCut:"#nav ul.ul"+i+" em.acuts i"});
	}	
	/*news==>dynamic*/
	r.tabSwitch({aBtn:"#news ul.tils li",aCut:"#news dd strong"});	
	/*news==>experts*/
	r.tabSwitch({aBtn:"#news .experts ol li",aCut:"#news .experts ul li",bAutoPlay:true});
	/*technology==>ol(主板块)*/	
	r.tabSwitch({aBtn:"#technology ol li",aCut:"#technology ul li"});
	/*technology==>dl(一板块)*/	
	r.tabSwitch({aBtn:"#technology dl"});
	/*technology==>diary(三板块)*/
	r.tabSwitch({aCut:"#technology .diary img",oPrev:'#technology .prev',oNext:'#technology .next'});	
	/*safe*/	
	r.tabSwitch({aBtn:"#safe ol li",aCut:"#safe ul li"});	
	/*equipment*/
	r.tabSwitch({aBtn:"#equipment ol li",aCut:"#equipment ul li"});
})