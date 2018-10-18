// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rClick=function(opts){
		var defaults={
			one:function(){},
			two:function(){}	
		};
		var settings=this.extend(defaults,opts);
		return this.each(function(){
			var _this=this;
			var onOFF=false;
			$(this).click(function(ev){
				onOFF=true;
				setTimeout(function(){
					if(onOFF){
						settings.one.call(_this,ev);
					}
				},200);
			})
			$(this).dblclick(function(ev){
				onOFF=false;
				settings.two.call(this,ev);	
			})
		});
	}
})(jQuery);