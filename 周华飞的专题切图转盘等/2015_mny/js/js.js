//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
$(function(){
	//医院专家
	$(function(){jQuery(".expert-main").slide({effect:"fold"});})
	
	//医院简介
	$('.box1_1 dl').find('dd').eq(0).addClass('active')
	$(".box1_2 ul li").each(function(index){
		$(this).hover(function(){
			$(".box1_2 ul li.select").removeClass('select');
			$(this).addClass('select');
			$('.box1_1 dl').eq(index).show().siblings().hide();
			$('.box1_1 dl').find('dd').removeClass('active');
			$('.box1_1 dl').eq(index).find('dd').addClass('active');
		});
	});
})