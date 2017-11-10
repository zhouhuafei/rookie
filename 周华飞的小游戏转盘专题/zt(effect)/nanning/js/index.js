//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
$(function(){
	/*banner*/
	jQuery("#banner").slide({mainCell:"ul",titCell:"ol li",effect:"fold",autoPlay:true});
	/*医院介绍*/
	jQuery("#pfshow1").slide({mainCell:"ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50,trigger:"click"});
	/*名医专栏*/
	jQuery(".iBox2_1").slide({mainCell:".iBox2_1_3",titCell:".iBox2_1_1 dl",effect:"leftLoop",autoPlay:true});
	/*病种导航*/
	jQuery(".iBox3_1").slide({mainCell:".iBox3_1_2",titCell:".iBox3_1_1 ul li",effect:"fold",autoPlay:true});
	/*特色疗法*/
	$('.iBox3_2 dl').mouseenter(function(){$(this).addClass('active').siblings().removeClass('active');});
	/*监督单位和医院环境*/
	jQuery(".iBox4").slide({mainCell:".iBox4_2",titCell:".iBox4_1 ul li",effect:"fold",autoPlay:true});
	jQuery(".iBox4_2").slide({mainCell:"ul#a1 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a2 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a3 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	/*视频(复制别人的)*/
	$(function(){
		$("#videoSi").click(function(){
			var vidda = document.getElementById("videoSi");
			vidda.innerHTML="<iframe src=video.html#videoSi width=400 height=250 frameborder=no scrolling=no></iframe>"
		});
		$("#video1").click(function(){
			var vidda = document.getElementById("videoSi");
			vidda.innerHTML="<iframe src=video.html#video1 width=400 height=250 frameborder=no scrolling=no></iframe>"
		});
		$("#video2").click(function(){
			var vidda = document.getElementById("videoSi");
			vidda.innerHTML="<iframe src=video.html#video2 width=400 height=250 frameborder=no scrolling=no></iframe>"
		});
		$("#video3").click(function(){
			var vidda = document.getElementById("videoSi");
			vidda.innerHTML="<iframe src=video.html#video3 width=400 height=250 frameborder=no scrolling=no></iframe>"
		});
		$("#video4").click(function(){
			var vidda = document.getElementById("videoSi");
			vidda.innerHTML="<iframe src=video.html#video4 width=400 height=250 frameborder=no scrolling=no></iframe>"
		});
	})
	/*替换商务通图片*/
	//$(function(){imgSrc({src:'图片路径'});})
})












