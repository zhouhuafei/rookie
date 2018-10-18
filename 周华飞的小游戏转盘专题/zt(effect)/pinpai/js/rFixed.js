// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
(function($){
	$.fn.rFixed=function(opts){
		return this.each(function(index){
			var $this=$(this);
			if(opts){
				if($.type(opts)=='boolean'){
					oParent=$this.parent();				
				}else{
					oParent=$(opts).eq(index);
				}
				var iParentHeight=oParent.outerHeight();
				var iParentTop=oParent.offset().top;
				var iHeight=$this.outerHeight();
				var iParentBorderWidth=parseInt(oParent.css('border-top-width'));
			}
			var iScrollTop=$(document).scrollTop();
			var iTop=$this.offset().top;
			var iTopDefault=$this.position().top;
			var iLeft=$this.offset().left;
			var iLeftDefault=$this.position().left;	
			fix();
			$(window).scroll(function(){
				iScrollTop=$(document).scrollTop();
				fix();
			});			
			function fix(){				
				if(opts){
					if(iScrollTop>=iParentHeight+iParentTop-iHeight-iParentBorderWidth){
						$this.css({position:'absolute',top:iParentHeight-iHeight-iParentBorderWidth*2,left:iLeftDefault});	
					}else if(iScrollTop>=iTop){
						$this.css({position:'fixed',top:0,left:iLeft});	
					}
					else{
						$this.css({position:'absolute',top:iTopDefault,left:iLeftDefault});
					}					
				}else{
					if(iScrollTop>=iTop){
						$this.css({position:'fixed',top:'0',left:iLeft});
					}else{
						$this.css({position:'absolute',top:iTopDefault,left:iLeftDefault});				
					}
				}
			}
		});
	};	
})(jQuery);