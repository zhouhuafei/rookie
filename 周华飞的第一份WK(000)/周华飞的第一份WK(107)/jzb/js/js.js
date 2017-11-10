//JavaScript Document
/*********************************
 *rookie qq:1123486116
 *rookie making
 *rookie Copyright
**********************************/
eventBind(window,'load',function(){
	/*nav*/
	(function(){
		flowNav('nav','dd','target');	
	})();
	/*til*/
	(function(){
		var aTil=getClass(document.body,'til');		
		for(var i=0,iLen=aTil.length;i<iLen;i++){
			aTils=aTil[i].getElementsByTagName('span');	
			slideTils(aTils);				
		}
	})();
	/*type*/
	(function(){
		var aBtn=document.getElementById('type').getElementsByTagName('li');
		tabSwitch(aBtn);
	})();
	/*contrast*/
	(function(){
		var aBtn_a=document.getElementById('contrast').getElementsByTagName('dl')[0].getElementsByTagName('dd');
		var aBtn_b=document.getElementById('contrast').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('contrast').getElementsByTagName('ul')[0].getElementsByTagName('li');
		dblSwitch(aBtn_a,aBtn_b,aCut);
	})();
	/*expert*/
	(function(){
		var oParent=document.getElementById('expert');
		var aCut=oParent.getElementsByTagName('dl');	
		tabSwitch(null,aCut,true,oParent);
	})();
	/*library*/
	(function(){
		var aBtn=document.getElementById('library').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('library').getElementsByTagName('ul')[0].getElementsByTagName('li');
		tabSwitch(aBtn,aCut,true);
	})();
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}	
}
/*offsetTop*/
function offsetTop(obj){
    var iTop=obj.offsetTop;
    var oParent=obj.offsetParent;
    while(oParent){
        iTop+=oParent.offsetTop;
        oParent=oParent.offsetParent;
    }
    return iTop;
}
/*slideTils*/
function slideTils(aTils){
	var iClientHeight=document.documentElement.clientHeight;
	var iScrollTop=0;
	var aTilsParentWidth=0
	eventBind(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		for(var i=0,len=aTils.length; i<len;i++){
			if(iClientHeight+iScrollTop>offsetTop(aTils[i])){
				aTilsParentWidth=aTils[i].parentNode.offsetWidth;
				aTilsWidth=aTils[i].offsetWidth;
				aTils[i].style.left=(aTilsParentWidth-aTilsWidth)/2+'px';
			}
		}
	})	
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
	!hasClass(obj,sClass)&&(obj.className?obj.className+=' '+sClass:obj.className=sClass);
}
/*removeClass*/
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','i');
	hasClass(obj,sClass)&&(obj.className=obj.className.replace(re,''));		
}
/*dblSwitch*/
function dblSwitch(aBtn_a,aBtn_b,aCut){
	for(var i=0,iLen=aBtn_a.length;i<iLen;i++){
		aBtn_b[i].index=i;
		aBtn_a[i].index=i;
		aBtn_a[i].onmouseover=aBtn_b[i].onmouseover=function(){
			for(var i=0,iLen=aBtn_a.length;i<iLen;i++){
				removeClass(aBtn_a[i],'active');	
				removeClass(aBtn_b[i],'active');	
				removeClass(aCut[i],'active');
			}
			addClass(aBtn_a[this.index],'active');
			addClass(aBtn_b[this.index],'active');
			addClass(aCut[this.index],'active');
		}			
	}
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
/*flowNav*/
function flowNav(oNav,aBtn,aTarget){
	if(typeof oNav=='string'){var oNav=document.getElementById(oNav)};
	if(typeof aBtn=='string'){var aBtn=oNav.getElementsByTagName(aBtn)};
	if(typeof aTarget=='string'){var aTarget=getClass(document.body,aTarget)};
	var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var iTop=offsetTop(oNav);
	var iHeight=oNav.offsetHeight;
	var iTarget=0;
	var iSpeed=0;
	var now=0;
	var timer=null;
	for(var i=0,len=aBtn.length;i<len;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			now=this.index;
			iTarget=offsetTop(aTarget[now])-iHeight;
			iSpeed=Math.round((iTarget-iScrollTop)/5);
			clearInterval(timer);
			timer=setInterval(function(){			
				if(iScrollTop+iSpeed>=iTarget&&iSpeed>0){
					window.scrollTo(0,iTarget);
					clearInterval(timer);	
				}else if(iScrollTop+iSpeed<=iTarget&&iSpeed<0){
					window.scrollTo(0,iTarget);
					clearInterval(timer);	
				}else{
					window.scrollTo(0,iScrollTop+iSpeed);
				}					
			},30)		
		}
	}
	eventBind(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		iScrollTop>=iTop?oNav.style.cssText='position:fixed;top:0;':oNav.style.cssText='';
		for(var i=0,len=aBtn.length;i<len;i++){
			if(iScrollTop>=offsetTop(aTarget[i])-iHeight){
				for(var j=0,len=aBtn.length;j<len;j++){
					removeClass(aBtn[j],'active');
				}				
				addClass(aBtn[i],'active');
			}
		}
	})
}