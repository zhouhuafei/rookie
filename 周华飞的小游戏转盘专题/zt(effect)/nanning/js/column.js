//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
$(function(){
	/*栏目页跳转高亮*/
	/*
	(function($){
		 var nowUrl=document.location.href;
		 var Arr=nowUrl.split('/');	
		 var index=0;
		 var urlArr=['yyjs','yiyuanxinwen','yiyuanrongyu','meitibaodao','mingyizhuanjia','teseliaofa','xianjinshebei','kangfubingli','yyhj','lylx'];
		 for(var i=0,len=urlArr.length;i<len;i++){
			if(Arr[3]==urlArr[i]){
				index = i;
			}
		}
		$('#pub_left a').eq(index).addClass('active').siblings('a').removeClass('active');  
	})(jQuery)
	*/
	/*监督单位和医院环境*/
	jQuery(".iBox4").slide({mainCell:".iBox4_2",titCell:".iBox4_1 ul li",effect:"fold",autoPlay:true});
	jQuery(".iBox4_2").slide({mainCell:"ul#a1 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a2 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	jQuery(".iBox4_2").slide({mainCell:"ul#a3 div",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
	/*替换商务通图片*/
	//$(function(){imgSrc({src:'图片路径'});})
})












