//加载商务通路径代码
document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"></script>');
//屏蔽自带商务通侧边悬浮框
document.writeln('<style type="text/css">img{ border:none;} #LRfloater0{ display:none;}</style>');

/********************************************************右侧数字的随机数************************************************/
function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   
var numR = GetRandomNum(10,99);
$(function(){$('#pfleft .pfa').html(numR);})

/*************************************************商务通替换函数简单封装**************************************/
function imgSrc(json){
	if(!json){var json={};}
	obj=document.querySelector('#pfCenter');
	json.pic=json.src||'/swt/images/swtcenter.gif';
	obj.style.backgroundImage="url("+json.pic+")";
}

/********************************************************左边中间右边特效************************************************/
setTimeout("showLeft()",1000);
setTimeout("showCenter()",15000);
function showLeft()
{
	$("#pfleft").fadeIn(800);
}
function showCenter()
{
	$("#pfCenter").fadeIn(1000);
	$("#pfleft").fadeOut(800);
}
function centerClose(){
	$('#pfCenter').fadeOut(800);
	$("#pfleft").fadeIn(800);
	setTimeout("showCenter()",60000); 
}
function leftClose(){
	$('#pfleft').fadeOut(1000);
	setTimeout("showCenter()",60000);
	
}
function closehd(){
	$('#nkHd').fadeOut('slow');
   	setTimeout('showLeft()',60000);	
}

/********************************************************左边部分************************************************/
document.writeln('<style type="text/css">')
document.writeln("#nkHd{");
document.writeln("	position: fixed;");
document.writeln("	z-index: 214748364;");
document.writeln("	top:150px;");
document.writeln("	width:137px;");
document.writeln("	height:208px;");
document.writeln("	left:0;}");
document.writeln('</style>');

document.writeln("<div id=\"nkHd\">");
document.writeln("	<img src=\"swt/images/left.jpg\" border=\"0\" usemap=\"#MapHd\" />");
document.writeln("	<map name=\"MapHd\" id=\"MapHd\">");
document.writeln("		<area shape=\"rect\" coords=\"0,27,137,205\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" />");
document.writeln("		<area shape=\"rect\" coords=\"112,0,134,22\" onclick=\"closehd()\" />");
document.writeln("  </map>");
document.writeln("</div>");

/********************************************************右边部分************************************************/
document.writeln('<style type="text/css">');
document.writeln('#pfleft a{ background:#000; opacity:0; filter:alpha(opacity=0);display:block;width:70px;margin-bottom:2px;}');
document.writeln('#pfleft a.pfa{ opacity:1; filter:alpha(opacity=100); background:none; height:60px; text-align:center; color:#f00; font-size:16px; line-height:35px;}');
document.writeln('#pfleft a.pfb{height:58px;}');
document.writeln('#pfleft a.pfc{height:60px;}');
document.writeln('#pfleft a.pfd{height:60px;}');
document.writeln('#pfleft a.pfe{height:50px;margin-bottom:0px; filter:alpha(opacity=0) !important;}');
document.writeln('</style>');

document.writeln('<div id="pfleft" style="position: fixed ! important;');
document.writeln('right: 2px; ');
document.writeln('top:150px;'); 
document.writeln('display:none;'); 
document.writeln('z-index: 998; ');
document.writeln('width:70px;'); 
document.writeln('background:url(swt/images/swtleft.jpg) no-repeat;'); 
document.writeln('height:292px;"> ');
document.writeln('<a class="pfa" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"></a>');
document.writeln('<a class="pfb" href="/guahao/" target="_blank"></a>');
document.writeln('<a  class="pfc" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2742410700&site=qq&menu=yes"></a>');
document.writeln('<a class="pfd" href="/lylx/" target="_blank"></a>');
document.writeln('<a class="pfe" id="returnTopBotton" onclick="returnTop();"></a>');
document.writeln('</div>');

/********************************************************中间部分************************************************/
document.writeln('<style type="text/css">');
document.writeln('#pfCenter{');
document.writeln('	display:none;');
document.writeln('	position: fixed ! important;');
document.writeln('	left:50%;');
document.writeln('	top:50%; ');
document.writeln('	margin-left:-195px; ');
document.writeln('	margin-top:-150px; ');
document.writeln('	z-index: 999; ');
document.writeln('	width:450px; ');
document.writeln('	height:300px; ');
document.writeln('	background:url(swt/images/swtcenter.gif) no-repeat;');
document.writeln('	box-shadow:1px 1px 10px #666;');
document.writeln('	border-collapse:collapse;');
document.writeln('}');
document.writeln('#pfCenter a{ background:#000; opacity:0; filter:alpha(opacity=0); display:block;height:37px;position:absolute;}');
document.writeln('#pfCenter a.closeBtn{width:37px;top:4px;left:411px;}');
document.writeln('#pfCenter a.zxBtn{width:132px;top:238px;left:85px;}');
document.writeln('#pfCenter a.ghBtn{width:132px;top:237px;left:232px;}');
document.writeln('</style>');

document.writeln('<div id="pfCenter">');
document.writeln('<a onClick="centerClose();" class="closeBtn"></a>');
document.writeln('<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" class="zxBtn"></a>');
document.writeln('<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" class="ghBtn"></a>');
document.writeln('</div>');

/********************************************************返回顶部************************************************/
window.onscroll = scrollTop;
function scrollTop(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
	if(sTop>510){
	   	$("#returnTopBotton").fadeIn('slow');
	}else{
       		$("#returnTopBotton").fadeOut('slow');
	}
}
function returnTop(){
    	var sTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
	window.scrollBy(0,-200);
	scrolldelay = setTimeout('returnTop()',10);
	if(sTop==0) clearTimeout(scrolldelay);
}

/********************************************************窗口抖动************************************************/
var suspendcode='<div id="pfshake" style=" overflow:hidden; border-radius:5px; z-index: 5000; position:fixed;right: 0px; bottom: 0px; width: 215px; height: 125px;background:url(swt/images/rightBottom_zt.jpg) no-repeat;cursor:pointer;display:none;">'+
	'<a onclick="pfshakeHide()" style=" background:#000; opacity:0; filter:alpha(opacity=0); width:40px; height:22px;display:block;position:absolute;cursor:pointer; right:0px;top:0px;text-indent:-9999px;z-index:2;">&nbsp;</a>'+
	'<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" style="display:block;width:214px;height:124px;position:absolute;top:0px;left:0px;z-index:1;"></a>'+
	'<p  style="position:absolute;right:25px;bottom:60px;color:#a14e00;font-size:12px;z-index:2;" >南宁中山医院专家在线</a>'+
	'<p  style="position:absolute;right:29px;bottom:40px;color:#000;font-size:12px;z-index:2;" >发送了一个窗口抖动</a>'+
	'<a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" style=" border-radius:3px; background:#dc3434; color:#fff; line-height:18px; text-align:center; height:18px;width:40px;position:absolute;right:55px;bottom:-30px;z-index:2;" >接受</a>'+
	'<a onclick="pfshakeHide()"   style=" border-radius:3px; background:#218dd2; color:#fff; line-height:18px; text-align:center; height:18px;width:40px;position:absolute;right:0px;bottom:-30px;z-index:2;" >拒绝</a>'+
'</div>'
document.write(suspendcode);	 
$(document).ready(function(){  
	$('#pfshake').fadeIn(1000);
	FollowDiv = {
		follow : function(){
			$('#pfshake').css('position','absolute');
			$(window).scroll(function(){
				var f_top = $(window).scrollTop() + $(window).height() - $("#pfshake").outerHeight();
				$('#pfshake').css( 'top' , f_top );
			});
		}
	}
	if($.browser.msie && $.browser.version == 6) {
		FollowDiv.follow();
	}
	shake();
	repeat = setInterval(shake,10000);
	$('#qqShake').bind('click',function(){
		if($('#LRfloater0').css('display') == 'block'){
			$('#LRfloater0 img').eq(1).click();
		}
		if($('#LRfloater1').css('display') == 'block'){
			$('#LRfloater1 area').eq(1).click();
		}
	})
 });
function pfshakeHide()  
{   
	$('#pfshake').fadeOut().delay(30000).fadeIn(1000);
	clearInterval(repeat);
}
function shake(){ 
	var a=['bottom','right'],b=0;
	var u=setInterval(function(){
		$('#pfshake').css( a[b%2] , (b++)%4<2?0:4 );
		if(b>17){
			clearInterval(u);
			b=0;
		}
	 },30)
}

/***********************************************目测这是与百度有关的代码*****************************************/
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?d84e0c2f3c4f0a70b6e2045313f07f3a";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);
})();

/********************************************************360代码************************************************/
document.writeln("              <script type=\"text/javascript\">");
document.writeln("var _mvq = _mvq || [];");
document.writeln("_mvq.push([\'$setAccount\', \'m-128967-0\']);");
document.writeln("");
document.writeln("_mvq.push([\'$logConversion\']);");
document.writeln("(function() {");
document.writeln("    var mvl = document.createElement(\'script\');");
document.writeln("    mvl.type = \'text/javascript\'; mvl.async = true;");
document.writeln("    mvl.src = (\'https:\' == document.location.protocol ? \'https://static-ssl.mediav.com/mvl.js\' : \'http://static.mediav.com/mvl.js\');");
document.writeln("    var s = document.getElementsByTagName(\'script\')[0];");
document.writeln("    s.parentNode.insertBefore(mvl, s); ");
document.writeln("})();");
document.writeln("");
document.writeln("</script>");
document.writeln("");
document.writeln("<!--以上是流量统计(到达转化)代码，后续转化代码需要配合流量统计代码一同使用-->");
document.writeln("");
document.writeln("<script type=\"text/javascript\">");
document.writeln("var _mvq = window._mvq || [];window._mvq = _mvq;");
document.writeln("_mvq.push([\'$setAccount\', \'m-128967-0\']);");
document.writeln("");
document.writeln("_mvq.push([\'custom\', \'jzqu1\', /*咨询*/ Math.random(),  \'\']);");
document.writeln("_mvq.push([\'$logConversion\']);");
document.writeln("");
document.writeln("</script>");
document.writeln("");
document.writeln("<!--以上是咨询的转化跟踪代码-->    ");


