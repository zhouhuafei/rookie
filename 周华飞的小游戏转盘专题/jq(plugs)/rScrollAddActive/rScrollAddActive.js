// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
;(function($){
	$.fn.rScrollAddActive=function(opt){
		return this.each(function(){
			var $this=$(this);
			var iScrollTop=$(window).scrollTop();
			var iClientH=$(window).height();
			var iTop=$this.offset().top;
			add();
			$(window).scroll(function(){
				iScrollTop=$(window).scrollTop();
				add();
			})
			function add(){
				if(iScrollTop+iClientH>=iTop){
					$this.addClass('active');
				}else{
					if(opt){
						$this.removeClass('active');
					}
				}
			}			
		});
	}	
})(jQuery);