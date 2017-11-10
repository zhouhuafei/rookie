//国庆
/* center 
setTimeout("guoqingShow()",1000);
function guoqingShow(){
	$("#pfGuoqing").fadeIn('slow');
}
function centerGqClose(){
    $("#pfGuoqing").fadeOut('slow');
	setTimeout("guoqingShow()",30000);
}
document.writeln('<style type="text/css">img{border:none;}#Pcenter{display:none;}#LRfloater0{display:none;}</style>');
document.writeln('<div id="pfGuoqing" style="width:145px; height:260px;display:none;background:url(/js/guoqing.gif) no-repeat left bottom;position: fixed ! important;_position:absolute; _top:expression(offsetParent.scrollTop+100); right:5px;top:100px; z-index: 999;">');
document.writeln('<a href="javascript:void(0);" onclick="centerGqClose();" style="color:#999;text-align:right;display:block;width:100%;height:20px;line-height:20px;font-size:13px;">关闭</a>');
document.writeln('<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" style="display:block;width:100%;height:240px;line-height:20px;font-size:16px;"></a>');
document.writeln('</div>');*/
function swt_pfb(){
	var swt="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT88796525&r="+document.referrer+"&p="+window.location.href;
	window.open(swt);
}
//---------------------
$(this).scroll(function() { // 页面发生scroll事件时触发 
var bodyTop = 0; 
if (typeof window.pageYOffset != 'undefined') { 
bodyTop = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
{ 
bodyTop = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') { 
bodyTop = document.body.scrollTop; 
} 

$("#lovexin2").css("top", 100 + bodyTop)

}); 

function hide1()  
{   
lovexin2.style.visibility="hidden"; 
}

//专家抖动
var suspendcode='<DIV id="lovexin1" style="Z-INDEX: 5000; position:fixed;right: 0px; bottom: 0px; width: 214px; height: 124px;cursor:pointer;display:none;">'+
	'<a onclick="hideLovexin1()"   style="font-size:12px;width:40px; height:22px;display:block;position:absolute;cursor:pointer; right:0px;top:0px;text-decoration:none;text-align:center;">&nbsp;</a>'+
	'<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;">'+
		'<img src="swt/RightBottom.gif"  width="214" height="124" border="0" />'+
	'</a>' +
	'<p  style="position:absolute;right:25px;bottom:60px;color:#a14e00;font-size:12px;" >南宁中山医院专家在线</a>'+
	'<p  style="position:absolute;right:29px;bottom:40px;color:#000;font-size:12px;" >发送了一个窗口抖动</a>'+
	'<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" style="position:absolute;right:35px;bottom:-30px;color:#bf1601;" >接受</a>'+
	'<a onclick="hideLovexin1()"   style="position:absolute;right:0px;bottom:-30px;color:#bf1601;" >拒绝</a>'+
'</DIV>'
document.write(suspendcode);
	
	 
$(document).ready(function(){  
	$('#lovexin1').fadeIn(1000);
	FollowDiv = {
		follow : function(){
			$('#lovexin1').css('position','absolute');
			$(window).scroll(function(){
				var f_top = $(window).scrollTop() + $(window).height() - $("#lovexin1").outerHeight();
				$('#lovexin1').css( 'top' , f_top );
			});
		}
	}
		//FF和IE7可以通过position:fixed来定位，只有ie6需要动态设置高度.
		if($.browser.msie && $.browser.version == 6) {
			FollowDiv.follow();
		}
		shake();
		repeat = setInterval(shake,10000);//这里repeat是全局，在hideLovexin1函数中清空
		//绑定点击事件
		$('#qqShake').bind('click',function(){
			if($('#LRfloater0').css('display') == 'block'){
				$('#LRfloater0 img').eq(1).click();
			}
			if($('#LRfloater1').css('display') == 'block'){
				$('#LRfloater1 area').eq(1).click();
			}
		})
 });
function hideLovexin1()  
{   
	$('#lovexin1').fadeOut().delay(30000).fadeIn(1000);
	clearInterval(repeat);
}	

//窗口抖动

function shake(){ 
	//window.console.log('shake')
	var a=['bottom','right'],b=0;
	var u=setInterval(function(){
		$('#lovexin1').css( a[b%2] , (b++)%4<2?0:4 );
		if(b>17){
			clearInterval(u);
			b=0;
		}
	 },30)
}
