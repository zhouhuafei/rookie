//JavaScript Document
/*common_i*/
$(function(){
	$('.common_i').each(function(i){
		$('.common_i').eq(i).css('left',Math.floor((1000-$('.common_i').eq(i).innerWidth())/2))	
	})		
})	

/*recovery*/
$(function(){
	var aBtn=$('#recovery li');
	tabSwitch(aBtn);
})