//JavaScript Document
$(function(){
	var aBtn=$('.box7 ol li');
	var aCut=$('.box7 dl');
	aBtn.mouseenter(function(){
		aCut.removeClass('on');
		aCut.eq($(this).index()).addClass('on');	
	})	
})