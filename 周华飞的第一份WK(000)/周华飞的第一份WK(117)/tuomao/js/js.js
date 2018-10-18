//JavaScript Document
/*expert*/
$(function(){
	jQuery(".expert").slide({mainCell:".bd",titCell:".hd li",autoPlay:true});	
})

/*other*/
$(function(){
	$(function(){
       	 	$(".jpxm li").mousemove(function(){
        	$(this).addClass("backgrd").siblings().removeClass("backgrd");
        });
    })	
})