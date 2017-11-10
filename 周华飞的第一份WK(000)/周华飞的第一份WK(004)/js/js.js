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
		/*毛囊炎选项卡切换和切换内容*/
		var oHair_type_box=document.getElementById('hair_type_box');
		var aLi=oHair_type_box.getElementsByTagName('li');
		var oHair_move=document.getElementById('hair_move');
		var aSpan=oHair_move.getElementsByTagName('span');
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aLi[i].onmouseover=function()
			{
				oHair_move.style.top=-418*this.index+'px';	
			}
		}
		
		/*毛囊炎类型切换滑动*/
		var oHair_a1=document.getElementById('hair_a1');
		var oHair_a2=document.getElementById('hair_a2');
		var oHair_move=document.getElementById('hair_move');
		var aHair_span=oHair_move.getElementsByTagName('span');
		oHair_move.innerHTML+=oHair_move.innerHTML;
		oHair_move.style.height=aHair_span[0].offsetHeight*aHair_span.length+'px';
		oHair_a2.onclick=function()
		{
			oHair_move.style.top=oHair_move.offsetTop+aHair_span[0].offsetHeight+'px';
			if(oHair_move.offsetTop>0){oHair_move.style.top=-aHair_span[0].offsetHeight*4+'px';}
		}
		oHair_a1.onclick=function()
		{
			oHair_move.style.top=oHair_move.offsetTop-aHair_span[0].offsetHeight+'px';
			if(oHair_move.offsetTop<-oHair_move.offsetHeight/2){oHair_move.style.top=-aHair_span[0].offsetHeight+'px';}
		}
		
		
		
/*--------------------------------------------------------------------------------------------------------*/

		
		/*患者就诊前后对比滑动*/
		var oHair_a3=document.getElementById('hair_a3');
		var oHair_a4=document.getElementById('hair_a4');
		var oHelp=document.getElementById('help');
		var aHelp_li=oHelp.getElementsByTagName('li');
		oHelp.innerHTML+=oHelp.innerHTML;
		oHelp.style.height=aHelp_li[0].offsetHeight*aHelp_li.length+'px';
		oHair_a3.onclick=function()
		{
			oHelp.style.top=oHelp.offsetTop+aHelp_li[0].offsetHeight+'px';
			if(oHelp.offsetTop>0){oHelp.style.top=-aHelp_li[0].offsetHeight*3+'px';}
		}
		oHair_a4.onclick=function()
		{
			oHelp.style.top=oHelp.offsetTop-aHelp_li[0].offsetHeight+'px';
			if(oHelp.offsetTop<-oHelp.offsetHeight/2){oHelp.style.top=-aHelp_li[0].offsetHeight+'px';}
		}
		
	
		
/*--------------------------------------------------------------------------------------------------------*/

		
		/*专家切换和切换内容*/
		var oExperts_box=document.getElementById('Experts_box');
		var aExpertsSpan=oExperts_box.getElementsByTagName('span');
		var oAbout_Experts_box=document.getElementById('about_Experts_box');
		var aExpertsLi=oAbout_Experts_box.getElementsByTagName('li');
		for(var i=0;i<aExpertsLi.length;i++)
		{
			aExpertsLi[i].index=i;
			aExpertsLi[i].onmouseover=function()
			{
				oExperts_box.style.top=-581*this.index+'px';
			}
		}
		
		/*专家切换和切换内容滑动*/
		var oHair_a5=document.getElementById('hair_a5');
		var oHair_a6=document.getElementById('hair_a6');
		oExperts_box.innerHTML+=oExperts_box.innerHTML;
		oExperts_box.style.height=aExpertsSpan[0].offsetHeight*aExpertsSpan.length+'px';
		oHair_a5.onclick=function()
		{
			oExperts_box.style.top=oExperts_box.offsetTop+aExpertsSpan[0].offsetHeight+'px';
			if(oExperts_box.offsetTop>0){oExperts_box.style.top=-aExpertsSpan[0].offsetHeight*3+'px';}
		}
		oHair_a6.onclick=function()
		{
			oExperts_box.style.top=oExperts_box.offsetTop-aExpertsSpan[0].offsetHeight+'px';
			if(oExperts_box.offsetTop<-oExperts_box.offsetHeight/2){oExperts_box.style.top=-aExpertsSpan[0].offsetHeight+'px';}
		}
		
		
/*--------------------------------------------------------------------------------------------------------*/	
		
		/*医院简介切换和切换内容*/
		var oHos_ul=document.getElementById('hos_ul');
		var aHos_li=oHos_ul.getElementsByTagName('li');
		var oHos_span=document.getElementById('hos_span');
		var aHos_span=oHos_span.getElementsByTagName('span');
		var oHos_ul_a1=document.getElementById('hos_ul_a1');
		var oHos_ul_a2=document.getElementById('hos_ul_a2');
		var oHos_ul_a3=document.getElementById('hos_ul_a3');
		var oHos_ul_a4=document.getElementById('hos_ul_a4');
		var oHos_ul_a5=document.getElementById('hos_ul_a5');
		var oHos_ul_a6=document.getElementById('hos_ul_a6');
		oHos_ul_a1.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1 hos_ul_a1_active';
				oHos_ul_a2.className='hos_ul_a2';
				oHos_ul_a3.className='hos_ul_a3';
				oHos_ul_a4.className='hos_ul_a4';
				oHos_ul_a5.className='hos_ul_a5';
				oHos_ul_a6.className='hos_ul_a6';
		}
		oHos_ul_a2.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1';
				oHos_ul_a2.className='hos_ul_a2 hos_ul_a2_active';
				oHos_ul_a3.className='hos_ul_a3';
				oHos_ul_a4.className='hos_ul_a4';
				oHos_ul_a5.className='hos_ul_a5';
				oHos_ul_a6.className='hos_ul_a6';
		}
		oHos_ul_a3.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1';
				oHos_ul_a2.className='hos_ul_a2';
				oHos_ul_a3.className='hos_ul_a3 hos_ul_a3_active';
				oHos_ul_a4.className='hos_ul_a4';
				oHos_ul_a5.className='hos_ul_a5';
				oHos_ul_a6.className='hos_ul_a6';
		}
		oHos_ul_a4.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1';
				oHos_ul_a2.className='hos_ul_a2';
				oHos_ul_a3.className='hos_ul_a3';
				oHos_ul_a4.className='hos_ul_a4 hos_ul_a4_active';
				oHos_ul_a5.className='hos_ul_a5';
				oHos_ul_a6.className='hos_ul_a6';
		}
		oHos_ul_a5.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1';
				oHos_ul_a2.className='hos_ul_a2';
				oHos_ul_a3.className='hos_ul_a3';
				oHos_ul_a4.className='hos_ul_a4';
				oHos_ul_a5.className='hos_ul_a5 hos_ul_a5_active';
				oHos_ul_a6.className='hos_ul_a6';
		}
		oHos_ul_a6.onmouseover=function()
		{
				oHos_ul_a1.className='hos_ul_a1';
				oHos_ul_a2.className='hos_ul_a2';
				oHos_ul_a3.className='hos_ul_a3';
				oHos_ul_a4.className='hos_ul_a4';
				oHos_ul_a5.className='hos_ul_a5';
				oHos_ul_a6.className='hos_ul_a6 hos_ul_a6_active';
		}
		for(var i=0;i<aHos_li.length;i++)
		{
			aHos_li[i].index=i;
			aHos_li[i].onmouseover=function()
			{
				for(var j=0;j<aHos_li.length;j++)
				{
					aHos_span[j].style.display='none';	
				}	
				aHos_span[this.index].style.display='block';
			}
		}
		
		
/*--------------------------------------------------------------------------------------------------------*/		

		/*侧边栏锚点定位*/
        (function($) {
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
}

}
