//JavaScript Document
/*therapy*/
$(function(){
	var aBtn=$('#therapy ol li');
	var aCut=$('#therapy ul li');
	tabSwitch(aBtn,aCut);
})
/*team*/
$(function(){
	var aBtn=$('#team ol li');
	var aCut=$('#team ul li');
	tabSwitch(aBtn,aCut);
})
/*reason*/
$(function(){
	jQuery(".reason").slide();
})
/*about*/
$(function(){
	jQuery(".about").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
})