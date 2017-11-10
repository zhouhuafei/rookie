/*修改商务通*/
function swt(){
var bcl="http://kht.zoosnet.net/LR/chatwin.aspx?id=KHT42929793&r="+document.referrer+"&p="+window.location.href;;
window.open(bcl);
}

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
	'<a onclick="hideLovexin1()"   style="font-size:12px;width:40px; height:40px;display:block;position:absolute;cursor:pointer; right:0px;top:0px;text-decoration:none;text-align:center;">&nbsp;</a>'+
	"<a onclick=\"swt()\">"+
		'<img src="..images/zjjhyydd.gif"  width="214" height="124" border="0" />'+
	'</a>' +
	'<a onclick=\"swt()\" style="position:absolute;right:50px;bottom:60px;color:#0072c1;font-size:12px;" >南宁中山医院专家</a>'+
	'<a onclick=\"swt()\" style="position:absolute;right:29px;bottom:40px;color:#000;font-weight:bold;font-size:12px;" >发送了一个窗口抖动</a>'+
	'<a onclick=\"swt()\" style="position:absolute;right:55px;bottom:10px;color:#0072c1;font-size:12px;" >接受</a>'+
	'<a onclick="hideLovexin1()"   style="position:absolute;right:15px;bottom:10px;color:#0072c1;font-size:12px;" >拒绝</a>'+
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
		shake();
		repeat = setInterval(shake,20000);//这里repeat是全局，在hideLovexin1函数中清空
		//绑定点击事件
		$('#qqShake').bind('click',function(){
			if($('#LRfloater0').css('display') == 'block'){
				$('#LRfloater0 img').eq(1).click();
			}
			if($('#LRfloater1').css('display') == 'block'){
				$('#LRfloater1 area').eq(1).click();
			}
		})
	/*FF和IE7可以通过position:fixed来定位，只有ie6需要动态设置高度.*/
		if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style) {
			FollowDiv.follow();
		}
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