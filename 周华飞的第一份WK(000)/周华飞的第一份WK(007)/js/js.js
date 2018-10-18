// JavaScript Document

/*创建HTML5元素*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');


window.onscroll=function()
{
	
	
	
	<!--导航栏切换-->
	var oNav=document.getElementById('nav');
	var aLi=oNav.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function()
		{
			for(var j=0; j<aLi.length;j++)
			{
				aLi[j].className='';	
			}
			this.className='a_active';	
		}
	}
	
	
	
	<!--第二个盒子里面的切换-->
 	var oSpan_limit=document.getElementById('span_limit');
	var oSpan_span=oSpan_limit.getElementsByTagName('span');
 	var oSpan_move=document.getElementById('span_move');
	var oSpan_a=oSpan_move.getElementsByTagName('a');
	for(var i=0; i<oSpan_a.length; i++)
	{
		oSpan_a[i].index=i;
		oSpan_a[i].onmousemove=function()
		{	
			for(var j=0; j<oSpan_a.length;j++)
			{
				oSpan_a[j].className='';
				oSpan_span[j].className='';				
			}
			this.className='a_active';
			oSpan_span[this.index].className='show_span';
		}
	}	



	<!--滑动特效-->
/*	
	var oUl=document.getElementById('ul_move');
	var oLeft_li=document.getElementById('left_li');
	var oRight_li=document.getElementById('right_li');
	var aLi_2=oUl.getElementsByTagName('li');
	var oLeft=document.getElementById('left_li');
	var oRight=document.getElementById('right_li');
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi_2[0].offsetWidth*aLi_2.length+'px';
*/			
	
/*-------------------------------------点击滑动和自由滑动组合版------------------------------------------------*/	
	/*
	var speed=-540;
		var timer=null;
		function move()
		{
			if(oUl.offsetLeft>0){oUl.style.left=-aLi_2[0].offsetWidth*2+'px';}
			if(oUl.offsetLeft<-oUl.offsetWidth/2){oUl.style.left=-aLi_2[0].offsetWidth+'px';}
			oUl.style.left=oUl.offsetLeft+speed+'px';
		}
		timer=setInterval(move,3000);
		oUl.onmouseover=function(){clearInterval(timer);}
		oUl.onmouseout=function(){timer=setInterval(move,3000);}
	oLeft_li.onclick=function()
	{
		oUl.style.left=oUl.offsetLeft-aLi_2[0].offsetWidth+'px';
		if(oUl.offsetLeft<-oUl.offsetWidth/2){oUl.style.left=-aLi_2[0].offsetWidth+'px';}
	}
	oRight_li.onclick=function()
	{
		oUl.style.left=oUl.offsetLeft+aLi_2[0].offsetWidth+'px';
		if(oUl.offsetLeft>0){oUl.style.left=-aLi_2[0].offsetWidth*2+'px';}
	}
	*/
	
	
	
	
/*-------------------------------------点击滑动------------------------------------------------*/	
	/*
		oLeft_li.onclick=function()
		{
			oUl.style.left=oUl.offsetLeft-aLi_2[0].offsetWidth+'px';
			if(oUl.offsetLeft<-oUl.offsetWidth/2){oUl.style.left=-aLi_2[0].offsetWidth+'px';}
		}
		oRight_li.onclick=function()
		{
			oUl.style.left=oUl.offsetLeft+aLi_2[0].offsetWidth+'px';
			if(oUl.offsetLeft>0){oUl.style.left=-aLi_2[0].offsetWidth*2+'px';}
		}
	*/
	
/*-------------------------------------自由滑动------------------------------------------------*/	
	/*
		var speed=-540;
		var timer=null;
		function move()
		{
			if(oUl.offsetLeft>0){oUl.style.left=-oUl.offsetWidth/2+'px';}
			if(oUl.offsetLeft<-oUl.offsetWidth/2){oUl.style.left=0+'px';}
			oUl.style.left=oUl.offsetLeft+speed+'px';
		}
		timer=setInterval(move,3000);
		oUl.onmouseover=function(){clearInterval(timer);}
		oUl.onmouseout=function(){timer=setInterval(move,3000);}	
		oLeft.onclick=function(){speed=-540;}
		oRight.onclick=function(){speed=540;}
	*/
/*--------------------------------------------------------------------------------------------------------*/		

		/*侧边栏锚点定位*/
   /*     (function($) {
	$.fn.navScroll = function(o) {
		o = $.extend({
			navAddClass: 'cur',
			conAddClass: 'posi',
			navH: 66,
			speedArg: 4
		}, o || {});

		var navAdd = o.navAddClass,conAdd = o.conAddClass,navH = o.navH,speedArg = o.speedArg;
		var _el = $(this),arrPos = [],timer = null;

		$('.' + conAdd + '').each(function() {
			arrPos.push($(this).offset().top);
		});

		_el.each(function(index) {
			$(this).attr('index', index);
			$(this).bind('click',
			function() {
				$(window).unbind('scroll', WinScroll);

				_el.each(function() {
					$(this).removeClass(navAdd);
				});

				$(this).addClass(navAdd);

				fnScroll($(this));
			});
		});

		function fnScroll(obj) {
			var iSpeed = 0;
			var iTarget = arrPos[obj.attr('index')]-navH;
			clearInterval(timer);
			
			timer = setInterval(function() {
				var oLength=$("#scroll_nav a").length;
				var cur = $(document).scrollTop(),clientH = $(window).height(),docH = $(document).height();
				//alert(cur+"   "+clientH+"   " +docH+"  "+iTarget);
				if(obj.attr('index')==oLength-1){	
					if((cur+clientH)>=docH){
							
							iTarget=docH-clientH;
							//alert(iTarget);
					}
				}
				iSpeed = (iTarget - cur) / speedArg;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)

				if (Math.abs(iTarget - cur) < 1) {
					clearInterval(timer);
					window.scrollTo(0, iTarget);
					$(window).bind('scroll', WinScroll);
				} else {					
					window.scrollTo(0, cur + iSpeed);
				}
			},
			30);
		}

		function WinScroll() {
			var cur = $(document).scrollTop()+navH;

			$.each(arrPos,
			function(i) {
				
				if (cur >= arrPos[i]) {
					if (cur < arrPos[i + 1]) {

						_el.each(function() {
							if ($(this).attr('index') == i) {
								$(this).addClass(navAdd);
							} else {
								$(this).removeClass(navAdd);
							}
						});
					} else {
						_el.each(function() {

							if ($(this).attr('index') == arrPos.length - 1) {
								$(this).addClass(navAdd);
							} else {
								$(this).removeClass(navAdd);
							}
						});
					}
				}
			});

		};
		$(window).bind('scroll', WinScroll);
	};

})(jQuery);

	$('#scroll_nav ul li').navScroll({
			navAddClass: 'active',  
			conAddClass: 'scroll_top',
			navH: 0,
			speedArg: 4
		}); 
		
		
	window.onscroll = function() {
		var oNav=document.getElementById('scroll_nav');
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		//alert(oTop);
		if (oTop >=650) {
			if (typeof document.body.style.maxHeight === "undefined") {
				oNav.style.top = oTop + 'px';
			} else {
				oNav.style.position = 'fixed';
				oNav.style.top = '100px';
				oNav.style.right='30px';
				oNav.style.zIndex=4000;
			}
		} else {
			oNav.style.position = 'absolute';
			oNav.style.top = '30px';
			oNav.style.right='20px';
		}			
}			*/

}
