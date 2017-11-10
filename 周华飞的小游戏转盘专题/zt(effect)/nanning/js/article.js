//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
$(function(){
	/*banner*/
	jQuery("#banner").slide({mainCell:"ul",titCell:"ol li",effect:"fold",autoPlay:true});
	/*皮肤病专家*/
	jQuery("#mt35 .aBox3").slide({mainCell:"dl",titCell:"ul li",effect:"leftLoop",autoPlay:true,startFun:function(){
		jQuery("#mt35 .aBox3 ul li").removeClass('on');
	}});
	jQuery("#mt35 .aBox3").slide({mainCell:"ul",effect:"leftLoop",autoPlay:true,vis:3});
	/*皮肤病专题*/
	$('#mt35 .aBox5 dl').mouseenter(function(){$(this).addClass('selected').siblings().removeClass('selected');});
	/*医患交流*/
	$('#mt35 .aBox7 dl').mouseenter(function(){$(this).addClass('selected').siblings().removeClass('selected');});
	/*监督单位和医院环境*/
	jQuery(".iBox4").slide({mainCell:".iBox4_2",titCell:".iBox4_1 ul li",effect:"fold",autoPlay:true});
	jQuery(".iBox4_2").slide({mainCell:"ul#a1 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a2 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a3 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	/*替换商务通图片*/
	//$(function(){imgSrc({src:'图片路径'});})
})












