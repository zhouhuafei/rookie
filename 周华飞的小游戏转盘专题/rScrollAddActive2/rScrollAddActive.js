// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rScrollAddActive=function(){
		return this.each(function(){
			var $this=$(this);
			var iScrollTop=$(window).scrollTop();
			var iClientH=$(window).height();
			var iTop=$this.offset().top;
			var iHeight=$this.outerHeight();
			add();
			$(window).scroll(function(){
				iScrollTop=$(window).scrollTop();
				add();
			})
			function add(){
				if(iScrollTop+iClientH>=iTop&&iScrollTop<=iTop+iHeight){
					$this.addClass('active');
				}else{		
					$this.removeClass('active');					
				}
			}			
		});
	}	
})(jQuery);