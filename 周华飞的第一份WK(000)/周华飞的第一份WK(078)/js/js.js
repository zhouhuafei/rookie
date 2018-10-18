//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*recovery*/
$(function(){
	var aBtn=$('.recovery ol li');
	var aCut=$('.recovery ul li');
	aBtn.mouseover(function(){
		aBtn.attr('class','');
		aCut.hide();
		$(this).attr('class','li_active');
		aCut.eq($(this).index()).show();
	})
})