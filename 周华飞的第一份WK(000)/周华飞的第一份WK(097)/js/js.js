//JavaScript Document
eventBind(window,'load',function(){
	/*banner*/
	(function(){
		var aBtn=document.getElementById('banner').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('banner').getElementsByTagName('ul')[0].getElementsByTagName('li');
		tabSwitch(aBtn,aCut,true);
	})();
	/*contrast*/
	(function(){
		var oParent=document.getElementById('contrast').getElementsByTagName('ul')[0];
		var aCut=document.getElementById('contrast').getElementsByTagName('li');
		tabSwitch(null,aCut,true,oParent);
	})();
	/*therapy*/
	(function(){
		var aBtn=document.getElementById('therapy').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('therapy').getElementsByTagName('ul')[0].getElementsByTagName('li');
		tabSwitch(aBtn,aCut);
	})();
	/*effect*/
	(function(){
		var aBtn=document.getElementById('effect').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('effect').getElementsByTagName('dl');
		tabSwitch(aBtn,aCut);
	})();
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}
/*getClass*/
function getClass(oParent,sClass){
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b','i');
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0,len=aEle.length;i<len;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);	
		}
	}
	return aResult;	
}
/*hasClass*/
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
/*addClass*/
function addClass(obj,sClass){
	!hasClass(obj,sClass)&&obj.className?obj.className+=' '+sClass:obj.className=sClass;		
}
/*removeClass*/
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','i');
	hasClass(obj,sClass)&&(obj.className=obj.className.replace(re,''));		
}
/*tabSwitch*/
function tabSwitch(aBtn,aCut,bFalse,oParent){
	var now=0;
	var timer=null;
	if(aBtn){
		for(var i=0,len=aBtn.length; i<len;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				now=this.index;
				tab();
			}			
		}
	}
	function tab(){
		for(var i=0,len=aBtn?aBtn.length:aCut.length; i<len;i++){
			aBtn&&removeClass(aBtn[i],'active');
			aCut&&removeClass(aCut[i],'active');	
		}
		aBtn&&addClass(aBtn[now],'active');
		aCut&&addClass(aCut[now],'active');			
	}
	function next(){
		now++;
		now%=aBtn?aBtn.length:aCut.length;
		tab();
	}	
	function prev(){
		now--;
		(now==-1)&&(now=aBtn?aBtn.length:aCut.length-1);
		tab();
	}
	if(bFalse){
		timer=setInterval(next,6000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,6000);}
	}
	if(oParent){
		var oPrev=getClass(oParent,'prev')[0];
		var oNext=getClass(oParent,'next')[0];
		oPrev.onclick=prev;
		oNext.onclick=next;	
	}
}