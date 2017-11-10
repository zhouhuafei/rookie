// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rFlowNav=function(opts){
		return this.each(function(){
			var $this=$(this);
			var defaults={
				aBtn:'li',
				sTarget:'target',
				sClass:'active',
				iHeight:$(this).outerHeight()
			};
			var arr=[];
			var settings=$.extend(defaults,opts);
			var aBtn=$(this).find(settings.aBtn);
			var iTop=$(window).scrollTop();
			var onOff=true;
			$('.'+settings.sTarget).each(function(index){arr[index]=$(this).offset().top;});
			aBtn.click(function(){
				onOff=false;
				var index=$(this).index('.'+$this.attr('class')+' li');
				$(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);
				$('html,body').animate({scrollTop:arr[index]-settings.iHeight},function(){onOff=true;});				
			});
			aBtn.each(function(index){iTop>=arr[index]-settings.iHeight&&$(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);});
			$(window).scroll(function(){
				iTop=$(window).scrollTop();
				if(!onOff)return;
				aBtn.each(function(index){iTop>=arr[index]-settings.iHeight&&$(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);});
			});
		});
	};	
})(jQuery);