// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rScrollUpDown=function(opts){
		var defaults={
			fnUp:function(){},
			fnDown:function(){}	
		};
		var settings=this.extend(defaults,opts);
		return this.each(function(){
			var timer=null;
			$(this).scroll(function(){
				if(timer)return;
				var iOldTop=$(this).scrollTop();
				timer=setTimeout(function(){
					var iNewTop=$(this).scrollTop();
					timer=null;
					if(iOldTop>iNewTop){
						settings.fnUp.call(this);
					}else if(iOldTop<iNewTop){
						settings.fnDown.call(this);
					}
				},400);
			});
		});
	}
})(jQuery);