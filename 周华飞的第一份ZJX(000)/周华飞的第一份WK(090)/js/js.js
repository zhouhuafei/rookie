//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
eventBind(window,'load',function(){
	/*nav*/
	(function(){
		var oNav=document.getElementById('nav');
		var aBtn=oNav.getElementsByTagName('li');
		var aTarget=getClass(document.body,'target');
		flowNav(oNav,aBtn,aTarget);
	})();
	
	/*face*/
	(function(){
		var aBtn=document.getElementById('face').getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=document.getElementById('face').getElementsByTagName('ul')[0].getElementsByTagName('li');
		tabSwitch(aBtn,aCut,true);
	})();
	
	/*aTil*/
	(function(){
		var aTils=getClass(document.body,'tils');
		slideTil(aTils);			
	})();
	
	/*step*/
	(function(){
		var aBtn=document.getElementById('step').getElementsByTagName('dl');
		tabSwitch(aBtn);	
	})();
	
	/*effect*/
	(function(){
		var aBtn=document.getElementById('effect').getElementsByTagName('li');
		tabSwitch(aBtn);	
	})();
	
	/*expert*/
	(function(){
		var oParent=document.getElementById('expert');
		var aBtn=oParent.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var aCut=oParent.getElementsByTagName('ul')[0].getElementsByTagName('li');
		var aBtnSt=document.getElementById('expert').getElementsByTagName('dd');
		tabSwitch(aBtn,aCut,true,oParent);
		tabSwitch(aBtnSt);
	})();
	
	/*wrong*/
	(function(){
		var aBtn=document.getElementById('wrong').getElementsByTagName('ul')[0].getElementsByTagName('li');
		tabSwitch(aBtn);	
	})();
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);}
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
/*slideTil*/
function slideTil(aTils){
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
	for(var i=0,len=aEle.length;i<len;i++){re.test(aEle[i].className)&&aResult.push(aEle[i]);}
	return aResult;
}
/*hasClass*/
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
/*addClass*/
function addClass(obj,sClass){!hasClass(obj,sClass)&&obj.className?obj.className+=' '+sClass:obj.className=sClass;}
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
		(now==-1)&&(now=aBtn?aBtn.length-1:aCut.length-1);
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