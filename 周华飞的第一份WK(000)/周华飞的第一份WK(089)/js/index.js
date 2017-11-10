//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*expert*/
$(function(){
	$('.expert li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');	
	});
})