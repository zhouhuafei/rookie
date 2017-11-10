//JavaScript Document
eventBind(window,'load',function(){
	/*nav*/
	(function(){
		var oNav=document.getElementById('nav');
		var aBtn=oNav.getElementsByTagName('dd');
		var aTarget=getClass(document.body,'target');
		flowNav(oNav,aBtn,aTarget);
	})();
	/*shot*/
	(function(){
		var aParent=getClass(document.body,'shot');
		for(var i=0,len=aParent.length; i<len;i++){
			var aCut=aParent[i].getElementsByTagName('ul')[0].getElementsByTagName('li');	
			tabSwitch(null,aCut,true,aParent[i]);
		}			
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
	/*like*/
	(function(){
			var scrollPic_02 = new ScrollPic();
			scrollPic_02.scrollContId   = "like_ul"; //内容容器ID
			scrollPic_02.arrLeftId      = "like_prev";//左箭头ID
			scrollPic_02.arrRightId     = "like_next"; //右箭头ID
			
			scrollPic_02.frameWidth     = 1074;//显示框宽度
			scrollPic_02.pageWidth      = 294; //翻页宽度   (翻页宽度 = 显示框宽度)
			scrollPic_02.sclContWidth   = 6504; //内容容器总宽度   (内容容器总宽度=显示框宽度*图片个数*2)       
			
			scrollPic_02.speed          = 20; //移动速度(单位毫秒，越小越快)
			scrollPic_02.space          = 20; //每次移动像素(单位px，越大越快)
			scrollPic_02.autoPlay       = true; //自动播放
			scrollPic_02.autoPlayTime   = 5; //自动播放间隔时间(秒)
			scrollPic_02.initialize(); //初始化			
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