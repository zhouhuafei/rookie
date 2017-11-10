// JavaScript Document
document.writeln("<style>");
document.writeln("#popup .one{ background:url(/images/popup1.jpg) center center no-repeat; height:150px; position:relative; overflow:hidden;}");
document.writeln("#popup .one a{ background:url(/images/popup-close.png) center center no-repeat; width:37px; height:37px; position:absolute; right:10px; top:10px;}");
document.writeln("#popup .two{ background:url(/images/popup2.jpg) center center no-repeat; height:121px; position:relative; overflow:hidden;}");
document.writeln("#popup .two a{ background:url(/images/popup-up.png) center center no-repeat; height:150px; width:86px; height:25px; position:absolute; right:100px; top:40px;}");
document.writeln("#popup .two a.active{ background:url(/images/popup-down.png) center center no-repeat;}");
document.writeln("</style>");
document.writeln("<div id=\"popup\">");
document.writeln("       <div class=\"one\"><a></a></div>");
document.writeln("       <div class=\"two\"><a></a></div>");
document.writeln("</div>");
$(function(){
	$('#popup').find('.one a').click(function(){
		$(this).parent().animate({height:0},function(){
			$('#popup').find('.two a').addClass('active');	
		});
	})
	$('#popup').find('.two a').click(function(){
		var _this=$(this);		
		if($(this).attr('class')=='active'){
			$('#popup').find('.one').animate({height:150},function(){
				_this.removeClass('active');	
			});			
		}else{
			$('#popup').find('.one').animate({height:0},function(){
				_this.addClass('active');	
			});	
		}
	})	
})