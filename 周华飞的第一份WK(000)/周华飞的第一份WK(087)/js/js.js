//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*headerNav*/
$(function(){
	var aBtn=$('#headerNav li');
	tabSwitch(aBtn);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*styleNav*/
$(function(){
	var aBtn=$('#styleNav li');
	tabSwitch(aBtn);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*mainVedio*/
$(function(){
	var aBtn=$('#mainVedio ol li');
	var aCut=$('#mainVedio ul li');
	tabSwitch(aBtn,aCut,true);
	var oDrag=document.getElementById('data_drag');
	var oArea=document.getElementById('data_dl').getElementsByTagName('dl')[0];
	customScrollBar(oDrag,oArea);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*mainTab*/
$(function(){
	var aBtn=$('#mainTab ol li');
	var aCut=$('#mainTab ul li');
	tabSwitch(aBtn,aCut,true);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*mainExpert*/
$(function(){
	var aBtn=$('#mainExpert ol li');
	var aCut=$('#mainExpert ul li');
	tabSwitch(aBtn,aCut,true);	
})
/*mainExpert dl dt a*/
$(function(){
	var aBtn=$('#mainExpert dt a');
	tabSwitch(aBtn);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*til*/
$(function(){
	var aTil=$('.til span');
	slideTil(aTil);		
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*therapy*/
$(function(){
	var aBtn=$('#therapy ol li');
	var aCut=$('#therapy ul li');
	tabSwitch(aBtn,aCut);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*team*/
$(function(){
	var aBtn=$('#team ol li');
	var aCut=$('#team ul li');
	tabSwitch(aBtn,aCut);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*recovery*/
$(function(){
	var aBtn=$('#recovery li');
	tabSwitch(aBtn);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*nous*/
$(function(){
	var aCut=$('#nous li');
	var aBtn=$('#nous .nousTil');
	slideSwitch(aBtn,aCut);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*hospital*/
$(function(){
	var aBtn=$('#hospital ol li');
	var aCut=$('#hospital ul li');
	tabSwitch(aBtn,aCut);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*footerSlide*/
$(function(){
	var aBtn=$('#footerSlide ol li');
	var aCut=$('#footerSlide div');
	tabSwitch(aBtn,aCut);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*footerTab ol li*/
$(function(){
	var aBtn=$('#footerTab ol li');
	var aCut=$('#footerTab ul');
	tabSwitch(aBtn,aCut);	
})
/*footerTab ul[0] li*/
$(function(){
	var aBtn=$('#footerTab ul')[0].getElementsByTagName('li');
	tabSwitch(aBtn);	
})
/*footerTab ul[1] li*/
$(function(){
	var aBtn=$('#footerTab ul')[1].getElementsByTagName('li');
	tabSwitch(aBtn);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*footerNav*/
$(function(){
	var aBtn=$('#footerNav li');
	tabSwitch(aBtn);	
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*tabSwitch*/
function tabSwitch(aBtn,aCut,bFalse){
	var now=0;
	var timer=null;
	for(var i=0,len=aBtn.length; i<len;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			now=this.index;
			tab();
		}			
	}
	function tab(){	
		for(var i=0,len=aBtn.length; i<len;i++){
			aBtn[i].className='';
			aCut&&(aCut[i].className='');	
		}
		aBtn[now].className='active';
		aCut&&(aCut[now].className='active');			
	}
	if(bFalse){
		function next(){
			now++;
			now%=aBtn.length;
			tab();	
		}
		timer=setInterval(next,6000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,6000);}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*eventBind*/
function eventBind(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);	
	}	
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*slideTil*/
function slideTil(aTil){
	var iClientHeight=document.documentElement.clientHeight;
	var iScrollTop=0;
	var aTilParentWidth=0
	eventBind(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		for(var i=0,len=aTil.length; i<len;i++){
			if(iClientHeight+iScrollTop>offsetTop(aTil[i])){
				aTilParentWidth=aTil[i].parentNode.offsetWidth;
				aTilWidth=aTil[i].offsetWidth;
				aTil[i].style.left=(aTilParentWidth-aTilWidth)/2+'px';
			}
		}
	})	
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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