// JavaScript Document

/*  程序自定义  */
//document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"><\/script>');
document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"></script>');
function swt_pfb(){
	var swt="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT88796525&r="+document.referrer+"&p="+window.location.href;
	window.open(swt);
}

//屏蔽自带商务通侧边悬浮框
document.write('<style type="text/css">img{ border:none;} #LRfloater0 , #divMenu , #divMenu3{ display:none;}</style>');
//第一次弹出时间
setTimeout("OnlineIn()",3000);
function OnlineIn(){
	
	$("#divMenu").fadeIn(800);

}

//间隔弹出时间
function OnlineOut(){
    $("#divMenu").fadeOut(800);

	setTimeout("OnlineIn()",30000);
}
//中间弹出框
document.write(' <div id="divMenu" style="position: fixed ! important;_position:absolute; _top:expression(offsetParent.scrollTop+100); left:50%; margin-left:-229px; top:100px; z-index: 2147483647; width:451px; height:351px;box-shadow:1px 1px 10px #000;"> ');
document.write(' <img src="images/swt_hzj.jpg" usemap="#myMap" /> ');
document.write(' <map name="myMap" id="myMap"> ');
document.write(' <area shape="rect" coords="426,1,451,29" href="javascript:void(0)" onClick="OnlineOut()" /> ');
document.write(' <area shape="rect" coords="93,305,362,341" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"/> ');
document.write(' </map> ');
document.write(' </div> ');




/************************右侧***********************/
document.writeln("<style type=\"text/css\">");
document.writeln("#divR{ position:fixed ! important; _position:absolute; _top:expression(offsetParent.scrollTop+100); left:5px; top:150px; z-index:2147483647; width:70px; overflow:hidden;}");
document.writeln("#divR a{ display:block; background:url(images/online_right.png) no-repeat #0b62af; width:70px; height:60px; border-bottom:1px solid #004177; position:relative}");
document.writeln("#divR a:hover{ background-color:#0a508f;}");
document.writeln("#divR .a01{ background-position:0 0;}");
document.writeln("#divR .a02{ background-position:0 -60px;}");
document.writeln("#divR .a03{ background-position:0 -120px;}");
document.writeln("#divR .a04{ background-position:0 -180px;}");
document.writeln("#divR .a05{ background-position:0 -240px; background-color:none; height:40px; border-bottom:none; bottom:0;}");
document.writeln("#divR .a05:hover{ background-position:0 -240px; background-color:#1d1d1d; opacity:0.5;}");
document.writeln("#divRsjs{ display:block; width:28px; height:24px; font-family:微软雅黑; text-align:center; line-height:24px; color:#F00; position:absolute; top:7px; left:21px;}");
document.writeln("</style>");
/*悬浮*/
document.writeln('<div id=\"divR\"> ');
document.writeln('	<a class=\"a01\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"在线咨询\"><span id=\"divRsjs\"></span></a>');
document.writeln('    <a class=\"a02\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"QQ咨询\"></a>');
document.writeln('    <a class=\"a03\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"预约专家\"></a>');
document.writeln('    <a class=\"a04\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"优惠\"></a>');
document.writeln('    <a class=\"a05\" href=\"javascript:void(0);\" onclick=\"pageScroll()\" title=\"返回顶部\"></a>');
document.writeln('</div>');
//document.writeln('<div id="rightTop" style="width:145px;height:239px;position: fixed ! important;_position:absolute;_top:expression(offsetParent.scrollTop+100);border-collapse: collapse;top:5px;left:5px;z-index:9999999999999999; "><a href="/zixun/" target="_blank"><img src="/swt/images/51.gif"/></a></div>');

/*返回顶部*/
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果速度
    scrolldelay = setTimeout('pageScroll()',10);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；
	//因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}

/*随机数*/
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   

var num = GetRandomNum(10,99);
 
$(document).ready(function() { 
	document.getElementById("divRsjs").innerHTML=num;
});
/************************右侧结束***********************/




