//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.addEventListener('load',function(){
	/*return*/
	(function(){
		var oReturn=document.querySelector('.return');
		oReturn.onclick=function(){$('html,body').animate({scrollTop:0});}
		new Touch('.return');
		var iST=$(window).scrollTop();		
		showHide();
		window.addEventListener('scroll',function(){
			iST=$(window).scrollTop();
			showHide();
		},false)
		function showHide(){
			if(iST>=50){
				oReturn.style.display='block';
			}else{
				oReturn.style.display='none';				
			}			
		}
	})();
	/*popup*/
	(function(){
		var oCs=document.getElementById('close');
		var oPop=document.getElementById('popup');
		drawClose(oCs);	
		show(oPop,15000);
		oCs.onclick=function(){
			hide(oPop);
		}
	})();
	/*pull*/
	pull();	
},false)
window.addEventListener('resize',function(){
	/*pull*/
	pull();	
},false)
/*Touch*/
function Touch(obj){
	this.obj=document.querySelector(obj);
	this.init();
}
Touch.prototype.init=function(){
	this.start();
}
Touch.prototype.start=function(){
	var _this=this;
	this.obj.ontouchstart=function(ev){
		var ev=ev.targetTouches[0];
		_this.onOff=true;
		_this.disx=ev.clientX-_this.obj.offsetLeft;
		_this.disy=ev.clientY-_this.obj.offsetTop;		
		document.ontouchmove=function(ev){
			_this.move(ev);
		}		
		document.ontouchend=_this.end;
		return false;
	}
}
Touch.prototype.move=function(ev){
	var ev=ev.targetTouches[0];
	this.obj.style.right='auto';
	this.obj.style.bottom='auto';
	this.obj.style.left=ev.clientX-this.disx+'px';
	this.obj.style.top=ev.clientY-this.disy+'px';
}
Touch.prototype.end=function(){
	document.onmousemove=null;
	document.onmouseup=null;		
}
/*drawClose*/
function drawClose(obj){
	var oCs=obj
	var oC=oCs.getContext('2d');
	oC.strokeStyle='#fff';
	oC.lineWidth=2;
	oC.moveTo(6,6);
	oC.lineTo(24,24);
	oC.moveTo(6,24);
	oC.lineTo(24,6);
	oC.stroke();
}
/*show*/
function show(obj,time){
	setTimeout(function(){
		$(obj).fadeIn();
		$('menu').fadeOut();
	},time)	
}
/*hide*/
function hide(obj){
	$(obj).fadeOut();
	$('menu').fadeIn();
	show(obj,40000);	
}
/*pull*/
function pull(){
	var iTop=document.getElementsByTagName('header')[0].offsetHeight;
	var oPull=document.querySelector('.pull');
	var oBtn=document.querySelectorAll('header li')[0];
	var oClose=document.querySelector('.pull img');
	var onOff=true;
	oPull.style.top=iTop+'px';
	//oPull.style.height='auto';
	//var iH=oPull.offsetHeight+300;
	//oPull.style.height=0;
	scrChange();
	oClose.onclick=function(){
		oPull.style.height=0;
		onOff=!onOff;
		scrChange();
	}
	oBtn.onclick=function(){
		if(onOff){
			this.firstElementChild.src='images/header-close.jpg';
			//oPull.style.height=iH+'px';
			oPull.style.height='100%';
		}else{
			scrChange();
			oPull.style.height=0;			
		}
		onOff=!onOff;	
	}
	function scrChange(){
		oBtn.firstElementChild.src='images/header-open.png';			
	}
}




