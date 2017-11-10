//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*cure*/
$(function(){
	$('.box2_left p').hover(function(){
		var index=$('.box2_left p').index(this);
		$('.box2_left p').removeClass('cur').eq(index).addClass('cur');
		$('.box2_right li').hide().eq(index).show();
	})
	$('.box2_right li').hover(function(){
		var index=$('.box2_right li').index(this);
		$('.box2_right li div').hide().eq(index).show();
	})	
});