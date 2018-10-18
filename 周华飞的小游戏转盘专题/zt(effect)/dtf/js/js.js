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
	(function(){
		var aTil=document.querySelectorAll('.til');
		var iLen=aTil.length;
		for(var i=0; i<iLen;i++){
			var str=aTil[i].innerHTML;
			var iLens=str.length;
			aTil[i].innerHTML="";
			for(var j=0;j<iLens;j++){
				oSpan=document.createElement('span');
				oSpan.innerHTML=str.charAt(j);
				aTil[i].appendChild(oSpan);
			}	
		}		
	})();
	/*therapy*/
	r.tabSwitch({oParent:"#therapy",dir:"top"});
	/*experience*/
	$('#experience ul').each(function(index){experience('#experience'+(index+1),'#experience'+(index+1)+' li','#experience'+(index+1)+' em');});
	/*expert*/	
	r.tabSwitch({oParent:"#expert"});
	/*reason*/	
	r.tabSwitch({oParent:"#reason",dir:"top"});
	/*hospitalMain*/
	r.tabSwitch({oParent:"#hospitalMain",dir:"top"});
})
/*experience*/
function experience(oParent,aChildren,obj){
	var oUl=$(oParent);
	var aLi=$(aChildren);
	var oEm=$(obj);
	aLi.each(function(index){
		aLi.eq(index).mouseover(function(){
			var iLeft=aLi.eq(index).position().left;
			index==1?iLeft=aLi.eq(index).position().left+53:iLeft=aLi.eq(index).position().left;
			oEm.stop().animate({left:iLeft});
		})	
	})
}