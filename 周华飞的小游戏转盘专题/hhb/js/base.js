// JavaScript Document
window.addEventListener('load',function(){
	/*nav*/
	(function(){
		function nav(){
			var oNav=document.querySelector('#nav');
			var oNavBox=document.querySelector('#nav-box');
			var oUl=document.querySelector('#nav ul');
			var aLi=document.querySelectorAll('#nav li');
			var oPopup=document.querySelector('#popup');
			var iLen=aLi.length;
			var iLiHeight=aLi[0].offsetHeight;
			var iLiAllWidth=0;
			var iLeft=0;
			var iTop=oNavBox.offsetTop;
			var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			window.addEventListener('scroll',function(){
				iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				iScrollTop>=iTop&&oPopup.className==''?oNav.style.position="fixed":oNav.style.position="absolute";	
			},false)
			for(var i=0;i<iLen;i++){
				iLiAllWidth+=aLi[i].offsetWidth;
				if(aLi[i].className=="on"){
					iLeft=aLi[i].offsetLeft;
				}	
			}
			var iUlWidth=iLiAllWidth;
			oNav.style.height=iLiHeight+'px';
			oNavBox.style.height=iLiHeight+'px';
			oUl.style.width=iUlWidth+'px';
			var Myscroll=new iScroll('nav',{hScrollbar:false,vScrollbar:false,vScroll:false});
			Myscroll.scrollTo(iLeft, 0, 200, true)
		}
		nav();
		window.addEventListener('resize',nav,false);
	})();
	/*sutra*/
	(function(){
		function sutra(){
			var oSutra=document.querySelector('#sutra');
			var oUl=document.querySelector('#sutra ul');
			var aLi=document.querySelectorAll('#sutra li');
			var iLen=aLi.length;
			var iLiHeight=aLi[0].offsetHeight;
			oSutra.style.height=iLiHeight+'px';
			new iScroll('sutra',{hScrollbar:false,vScrollbar:false,vScroll:false});
		}
		sutra();					
		window.addEventListener('resize',sutra,false);	
	})();
	/*navigation*/
	(function(){
		function navigation(){
			var oHeader=document.querySelector('header');
			var oEm=document.querySelector('header em');
			var oFlowLi=document.querySelector('#flow li.thr');
			var oNavigation=document.querySelector('#navigation');
			var oNavDiv=document.querySelectorAll('#navigation div');
			var oNavStrong=document.querySelectorAll('#navigation strong');
			var iNavigationH=oNavigation.offsetHeight
			var iHeaderH=oHeader.offsetHeight;
			var iClientH=document.documentElement.clientHeight;
			oNavigation.style.top=iHeaderH+'px';
			oFlowLi.onclick=oEm.onclick=function(){
				window.scrollTo(0,0);
				if(oEm.className!='on'){	
					oEm.className='on';
					changeStyle(oNavigation,'height',iClientH-iHeaderH,function(){
						new iScroll('navigation',{hScrollbar:false,vScrollbar:false,hScroll:false});	
					});
					document.documentElement.style.overflow='hidden';//电脑
					document.body.style.overflow='hidden';//手机(骗人的吧,根本不管用)
					document.ontouchmove=function(ev){ev.preventDefault();}//手机
				}else{
					oEm.className='';
					changeStyle(oNavigation,'height',0,function(){
						document.documentElement.style.overflow='auto';//电脑
						document.body.style.overflow='auto';//手机(骗人的吧,根本不管用)
						document.ontouchmove=null;//手机						
					});
				}
			}
			if(oEm.className!='on'){
				oNavigation.style.height=0;		
			}else{
				window.scrollTo(0,0);
				oNavigation.style.height=iClientH-iHeaderH+'px';//这里可以再优化,就是有点卡,我想还是算了吧
				//changeStyle(oNavigation,'height',iClientH-iHeaderH);	
			}	
		}
		navigation();
		window.addEventListener('resize',navigation,false);
	})();
	/*popup*/
	(function(){
		var oBody=document.body;
		var oNavBox=document.querySelector('#nav-box');
		var oNav=document.querySelector('#nav');
		var oFlow=document.querySelector('#flow');
		var oPopup=document.querySelector('#popup');
		var oClose=document.querySelector('#popup div.close-popup');
		var iHeight=oPopup.offsetHeight;
		var iScrollT=document.documentElement.scrollTop||document.body.scrollTop;
		var iClientH=document.documentElement.clientHeight;
		var iNavBoxT=oNavBox.offsetTop;
		var iFlowH=oFlow.offsetHeight;
		var iBodyH=oBody.offsetHeight;
		oPopup.className!='on'&&(oPopup.style.top=-iHeight+'px');
		show();
		oClose.onclick=function(){
			hide();
			show();
		}
		function show(){
			setTimeout(function(){
				changeStyle(oPopup,'top',parseInt((iClientH-iHeight)/2)+iScrollT);
				oPopup.className='on';
				iScrollT+iClientH<iBodyH-iFlowH&&(oFlow.className='');
				oNav.style.position="absolute";
			},15000);
		}
		function hide(){
			changeStyle(oPopup,'top',-iHeight);
			oPopup.className='';
			oFlow.className='on';	
			iScrollT>=iNavBoxT&&(oNav.style.position="fixed");
		}
		function popupMove(){
			iHeight=oPopup.offsetHeight;
			iFlowH=oFlow.offsetHeight;
			iBodyH=oBody.offsetHeight;
			iClientH=document.documentElement.clientHeight;
			iScrollT=document.documentElement.scrollTop||document.body.scrollTop;
			oPopup.className=='on'&&changeStyle(oPopup,'top',parseInt((iClientH-iHeight)/2)+iScrollT);
			//setTimeout(function(){oPopup.className=='on'&&changeStyle(oPopup,'top',parseInt((iClientH-iHeight)/2)+iScrollT);},30);
			iScrollT+iClientH<iBodyH-iFlowH?oPopup.className=='on'&&(oFlow.className=''):oFlow.className='on';
		}
		window.addEventListener('scroll',popupMove,false);
		window.addEventListener('resize',popupMove,false);
	})();
	/*changeStyle*/
	function changeStyle(obj,attr,iTarget,fn){
		var obj=obj||document.querySelector(obj);
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var cur=parseInt(getComputedStyle(obj,false)[attr]);
			var speed=(iTarget-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			obj.style[attr]=cur+speed+'px';
			if(cur==iTarget){
				clearInterval(obj.timer);
				fn&&fn();	
			}
		},30)
	}
},false)