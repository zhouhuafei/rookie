function swt(){
var bcl="http://pdt.zoosnet.net/lr/Chatpre.aspx?id=PDT83653494&r="+document.referrer+"&p="+window.location.href;
window.open(bcl);
}


//专家抖动
var suspendcode='<DIV id="lovexin1" style="Z-INDEX: 5000; position:fixed;right: 0px; bottom: 0px; width: 214px; height: 124px;cursor:pointer;">'+
	
	'<a onclick="hideLovexin1()"   style="font-size:18px;width:40px;display:block;position:absolute;cursor:pointer; right:0px;top:0px;text-align:center;">X</a>'+
	"<a href=\"javascript:void(0);\" onclick=\"LR_HideInvite();openZoosUrl();return false;\">"+
		'<img src="/img/doudong.gif"  width="214" height="124" border="0" />'+
	'</a>' +
	'<a href=\"javascript:void(0);\" onclick=\"LR_HideInvite();swt();return false;\"  style="position:absolute;right:25px;bottom:60px;color:#0072c1;" >上海江城皮肤病医院专家</a>'+
	'<a href=\"javascript:void(0);\" onclick=\"LR_HideInvite();openZoosUrl();return false;\" style="position:absolute;right:29px;bottom:40px;color:#000;font-weight:bold;" >发送了一个窗口抖动</a>'+
	'<a href=\"javascript:void(0);\" onclick=\"swt();return false;\" style="position:absolute;right:55px;bottom:10px;color:#0072c1;" >接受</a>'+
	'<a onclick="hideLovexin1()"   style="position:absolute;right:15px;bottom:10px;color:#0072c1;" >拒绝</a>'+
'</DIV>'
document.write(suspendcode);
	
	 
$(document).ready(function(){  
	$('#lovexin1').css('display','block');
	FollowDiv = {
		follow : function(){
			$('#lovexin1').css('position','absolute');
			$(window).scroll(function(){
				var f_top = $(window).scrollTop() + $(window).height() - $("#lovexin1").outerHeight();
				$('#lovexin1').css( 'top' , f_top );
			});
		}
	}
		/*FF和IE7可以通过position:fixed来定位，只有ie6需要动态设置高度.*/
		if($.support.msie && $.support.version == 6) {
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
	$('#lovexin1').css('display','none');
	clearInterval(repeat);
}	
/**
 * 窗口抖动
 */ 
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
setInterval(function(){
	shake();
},10000)