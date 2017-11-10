// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rMouseWheel=function(opts){
		var defaults={
			fnUp:function(){},
			fnDown:function(){}	
		};
		var settings=this.extend(defaults,opts);
		return this.each(function(){
			this.onmousewheel=function(){
				if(event.wheelDelta==120){
					settings.fnUp.call(this,event);	
				}else if(event.wheelDelta==-120){
					settings.fnDown.call(this,event);		
				};
				return false;
			};
			this.addEventListener('DOMMouseScroll',function(ev){
				if(ev.detail*-40==120){
					settings.fnUp.call(this,ev);	
				}else if(ev.detail*-40==-120){
					settings.fnDown.call(this,ev);		
				};
				ev.preventDefault();	
			},false);
		});	
	}	
})(jQuery);