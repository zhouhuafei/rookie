// JavaScript Document

/*
 *      导航滚动插件
 *      wirter:大树
 *      QQ：510036379
 * 
 *      用法：
		$('.navm li a').navScroll({
			navAddClass: 'cur',  
			conAddClass: 'posi',
			navH: 55,
			speedArg: 7
		}); 
 */

/*(function($) {
	$.fn.navScroll = function(o) {
		o = $.extend({
			navAddClass: 'cur',
			conAddClass: 'posi',
			navH: 50,
			speedArg: 7
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
				
				var cur = $(document).scrollTop(),clientH = $(window).height(),docH = $(document).height();
				
				if((cur+clientH-navH)>docH){
					iTarget=docH-clientH;
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

$('#scroll_nav ul li a').navScroll({
	navAddClass: 'active',  
	conAddClass: 'scroll_top',
	navH: 50,
	speedArg: 7
}); 

window.onscroll = function() {
	var oNav=document.getElementById('scroll_nav');
	var oTop = document.documentElement.scrollTop || document.body.scrollTop;
	//alert(oTop);
	if (oTop >= 698) {
		if (typeof document.body.style.maxHeight === "undefined") {
			oNav.style.top = oTop + 'px';
		} else {
			oNav.style.position = 'fixed';
			oNav.style.top = 0+"px";
			oNav.style.zIndex=999999;
		}
	} else {
		oNav.style.position = 'absolute';
		oNav.style.top = 698+"px";
	}				
};  */

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
window.onload = window.onscroll = function() {
		var oNav=document.getElementById('scroll_nav');
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		//alert(oTop);
		if (oTop >= 0) {
			if (typeof document.body.style.maxHeight === "undefined") {
				oNav.style.top = oTop + 'px';
			} else {
				oNav.style.position = 'fixed';
				oNav.style.top = '100px';
				oNav.style.right='20px';
				oNav.style.zIndex=4000;
			}
		} else {
			oNav.style.position = 'absolute';
			oNav.style.top = '30px';
			oNav.style.right='20px';
		}			
};