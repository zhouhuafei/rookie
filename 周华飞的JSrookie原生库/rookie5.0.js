// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
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
/*slideSwitch*/
function slideSwitch(aBtn,aCut){	
	var now=0;
	for(var i=1,len=aBtn.length;i<len;i++){
		aCut[i].style.left=aBtn[i].offsetWidth*(i-1)+aCut[i].offsetWidth+'px';	
	}
	for(var i=0,len=aBtn.length;i<len;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			now=this.index;
			for(var i=0,len=aBtn.length;i<len;i++){
				if(now>=i){				
					aCut[i].style.left=aBtn[i].offsetWidth*i+'px';	
				}else{			
					aCut[i].style.left=aBtn[i].offsetWidth*(i-1)+aCut[i].offsetWidth+'px';		
				}	
			}
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
/*limitFixed*/
function limitFixed(obj){
	if(typeof obj=='string'){var oSon=document.getElementById(obj);}else{var oSon=obj;}
	var oParent=oSon.parentNode;
	var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var iClientWidth=document.documentElement.clientWidth;
	var iParentHeight=oParent.offsetHeight;
	var iParentWidth=oParent.offsetWidth;
	var iParentTop=offset(oParent).y;
	var iParentLeft=offset(oParent).x;
	var iSonHeight=oSon.offsetHeight;
	var iSonTop=offset(oSon).y;
	var iSonFixLeft=offset(oSon).x;
	var iSonAbsLeft=oSon.offsetLeft;
	eventBind(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(iScrollTop>=iParentHeight+iParentTop-iSonHeight){
			oSon.style.position='absolute';
			oSon.style.top=iParentHeight-iSonHeight+'px';
			oSon.style.left=iSonAbsLeft+'px';
		}else if(iScrollTop>=iSonTop){
			oSon.style.position='fixed';
			oSon.style.top=0;
			oSon.style.left=iSonFixLeft+'px';
		}else{
			oSon.style.position='absolute';
			oSon.style.left=iSonAbsLeft+'px';
		}
	})		
}
/*returnTop*/
function returnTop(){
	var timer=null;
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	scrollBy(0,-200);
	clearTimeout(timer);
	timer=setTimeout(arguments.callee,30);
	if(oScrollTop==0){clearTimeout(timer)};
}
/*returnTop2*/
function returnTop2(){
	var timer=null;
	var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	clearInterval(timer);
	timer=setInterval(function(){	
		oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		scrollBy(0,-200);
		if(oScrollTop==0){clearInterval(timer);};
	},30)
}
/*shake*/
function shake(obj,dir,fn){
	if(obj.timer){return;}
	var arr=[];
	var num=0;
	var pos=parseInt(getStyle(obj,dir));
	for(var i=40;i>0;i-=2){arr.push(i,-i);	}
	arr.push(0);
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){	
		obj.style[dir]=pos+arr[num]+'px';
		num++;
		if(num==arr.length){			
			clearInterval(obj.timer);
			fn&&fn();
			obj.timer=null;
		}
	},30); 
}
/*drag*/
function drag(obj){
	if(typeof obj=='string'){var obj=document.getElementById(obj);}
	obj.onmousedown=function(ev){
		var oEvent=ev||event;
		disX=oEvent.clientX-obj.offsetLeft;
		disY=oEvent.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			if(l<50){l=0;}
			else if(l>document.documentElement.clientWidth-obj.offsetWidth-50){l=document.documentElement.clientWidth-obj.offsetWidth;}
			if(t<50){t=0;}
			else if(t>document.documentElement.clientHeight-obj.offsetHeight-50){t=document.documentElement.clientHeight-obj.offsetHeight;}
			obj.style.left=l+'px';
			obj.style.top=t+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			obj.releaseCapture&&obj.releaseCapture();
		}
		oEvent.stopPropagation?oEvent.stopPropagation():oEvent.cancelBubble=true;
		obj.setCapture&&obj.setCapture();
		return false;
	}
}
/*drag2*/
function drag2(obj){
	if(typeof obj=='string'){var obj=document.getElementById(obj);}
	obj.onmousedown=function(ev){
		var oEvent=ev||event;
		disX=oEvent.clientX-obj.parentNode.offsetLeft;
		disY=oEvent.clientY-obj.parentNode.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			if(l<50){l=0;}
			else if(l>document.documentElement.clientWidth-obj.parentNode.offsetWidth-50){l=document.documentElement.clientWidth-obj.parentNode.offsetWidth;}
			if(t<50){t=0;}
			else if(t>document.documentElement.clientHeight-obj.parentNode.offsetHeight-50){t=document.documentElement.clientHeight-obj.parentNode.offsetHeight;}
			obj.parentNode.style.left=l+'px';
			obj.parentNode.style.top=t+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			obj.parentNode.releaseCapture&&obj.parentNode.releaseCapture();
		}
		oEvent.stopPropagation?oEvent.stopPropagation():oEvent.cancelBubble=true;
		obj.parentNode.setCapture&&obj.parentNode.setCapture();
		return false;
	}
}
/*customScrollBar*/
function customScrollBar(oDrag,oArea){
	if(typeof oDrag=='string'){var oDrag=document.getElementById(oDrag);}
	if(typeof oArea=='string'){var oArea=document.getElementById(oArea);}
	var iAreaHeight=oArea.offsetHeight;
	var iDragHeight=oDrag.offsetHeight;
	var iLimitHeight=oDrag.parentNode.offsetHeight;
	var iLimitWidth=oDrag.parentNode.offsetWidth;
	var iScale=0;
	oDrag.onmousedown=function(ev){
		var oEvent=ev||event;
		disY=oEvent.clientY-oDrag.offsetTop;
		document.onmousemove=function(ev){
			iScale=oDrag.offsetTop/(iLimitHeight-iDragHeight);
			var oEvent=ev||event;
			var t=oEvent.clientY-disY;
			if(t<0){t=0;}
			else if(t>iLimitHeight-oDrag.offsetHeight){t=iLimitHeight-oDrag.offsetHeight;}
			oDrag.style.top=t+'px';
			oArea.style.top=-(iAreaHeight-iLimitHeight)*iScale+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			oDrag.releaseCapture&&oDrag.releaseCapture();
		}
		oEvent.stopPropagation?oEvent.stopPropagation():oEvent.cancelBubble=true;
		oDrag.setCapture&&oDrag.setCapture();
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/*offset*/
function offset(obj){
	if(typeof obj=='string'){var obj=document.getElementById(obj);}
	var x=0,y=0;
	while(obj!=null){
		x+=obj.offsetLeft;
		y+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return{x:x,y:y}
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
function addClass(obj,sClass){!hasClass(obj,sClass)&&(obj.className?obj.className+=' '+sClass:obj.className=sClass);}
/*removeClass*/
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','i');
	hasClass(obj,sClass)&&(obj.className=obj.className.replace(re,''));
}
/*getStyle*/
function getStyle(obj,name){return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];}
/*startMove*/
function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			var cur=0;
			attr=='opacity'?cur=Math.round(parseFloat(getStyle(obj,attr)*100)):cur=parseInt(getStyle(obj,attr));
			var speed=(json[attr]-cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			(cur!=json[attr])&&(bStop=false);					
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}			
		}
		if(bStop){
			clearInterval(obj.timer);
			fnEnd&&fnEnd();
		}
	},30);
}
/*upDate*/
function upDate(day){
       var iMyDate=new Date();
       var iMinSen=iMyDate.getTime() + 1000*60*60*24*day;
       iMyDate.setTime(iMinSen);
       var iYear=iMyDate.getFullYear();
       var iMonth=iMyDate.getMonth()+1;  
       var iDate=iMyDate.getDate();
       var iHour=iMyDate.getHours();
       var iMin=iMyDate.getMinutes();
       var iSen=iMyDate.getSeconds();
       return iYear+'年'+fullZero(iMonth)+"月"+fullZero(iDate)+'日'+fullZero(iHour)+'时'+fullZero(iMin)+'分'+fullZero(iSen)+'秒';  
} 
/*fullZero*/
function fullZero(n){return n=n<10?'0'+n:''+n;}
/*getElementNode*/
function getElementNode(obj){
	return {
		firstElementChild:function(){return obj.firstElementChild?obj.firstElementChild:obj.firstChild;},
		lastElementChild:function(){return obj.lastElementChild?obj.lastElementChild:obj.lastChild;}	,
		nextElementSibling:function(){return obj.nextElementSibling?obj.nextElementSibling:obj.nextSibling;},
		previousElementSibling:function(){return obj.previousElementSibling?obj.previousElementSibling:obj.previousSibling;},
		childElementCount:function(){return obj.childElementCount?obj.childElementCount:obj.childNodes.length;},
		siblingElementCount:function(){return getElementNode(obj.parentNode).childElementCount()-1;},
		allElementChild:function(){return obj.children;},
		allElementSibling:function(){
			var aResult=[];
			var aSiblings=obj.parentNode.children;
			for(var i=0,iLen=aSiblings.length;i<iLen;i++){aSiblings[i]!=obj&&aResult.push(aSiblings[i]);}
			return aResult;
		}
	}
}