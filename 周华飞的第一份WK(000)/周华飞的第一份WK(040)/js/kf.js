// JavaScript Document
/*
文件结构：
/swt/
|
|----------|----------|
images swt.js swt_news.js
images：用于存放图片
swt.js：为商务通代码
swt_news.js：为新闻商务通代码
代码结构：
1，第一次弹出时间,不设置代表页面一加载就弹出
2，被关闭后间隔弹出时间
3，弹窗
思路：屏蔽商务通原来的弹窗，方法swt();用于onclick时间时触发商务通;
*/
//商务通代码
function swt2007001(){
var bcl="http://pdt.zoosnet.net/lr/Chatpre.aspx?id=PDT83653494";
window.open(bcl);
}
//加载商务通路径代码
document.write('<script language="javascript" src="http://pdt.zoosnet.net/JS/LsJS.aspx?siteid=PDT83653494&float=1"></script>');
//屏蔽侧边悬浮框
document.write('<style type="text/css">img{border:none;} #LRfloater0{display:none;} #LRfloater110{display:none;} #divMenu1{display:none;} #LRleft{display:none;}</style>');
//间隔弹出时间
function OnlineOut(){
$("#divMenu").fadeOut(800);
$("#divMenu1").fadeIn(800);
setTimeout("OnlineIn2()",30000);
}
function closure(){
$('#divMenu1').fadeOut(1000);
}
function OnlineIn2(){
$("#divMenu").fadeIn(1000);
$("#divMenu2").fadeIn(1000);
$("#divMenu1").fadeOut(1000);
}
//中间弹出框
document.write('<style type="text/css">img{border:none;}</style>');
document.write('<div id="divMenu" style="position: fixed ! important;_position:absolute; _top:expression(offsetParent.scrollTop+100); left:50%; margin-left:-224px; top:200px; z-index: 2147483647; width:466px; height:257px; border-collapse:collapse;"><img src="img/cen.gif" usemap="#myMap" /><map name="myMap" id="myMap"><area shape="rect" coords="442,1,461,21" style="cursor:pointer" href="javascript:void(0);" onClick="OnlineOut();" /><area shape="rect" coords="203,213,414,243" style="cursor:pointer" href="javascript:void(0);" onClick="swt2007001();" </map></div>');
/*
*右边弹框
*/
//间隔弹出时间

//右边弹出框
document.write('<style type="text/css">img{border:none;}</style>');
document.write('<div id="divMenu1" style="position:fixed !important; _position:absolute; left:5px; top:70px; z-index:2147483647; width:153px; height:422px;"> <img src="img/online_cn1.gif" usemap="#myMap2"/> <map name="myMap2" id="myMap2"><area shape="rect" coords="138,0,153,17" style="cursor:pointer" href="javascript:void(0);" onClick="closure();"/> <area shape="rect" coords="29,342,129,403" style="cursor:pointer" href="javascript:void(0);" onClick="swt2007001();"/></map></div>');
document.write('<script language="javascript" src="/js/jquery.js"></script>'); 

//百度统计  离线宝
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F16a315e707660a68fe02d0b8860309b2' type='text/javascript'%3E%3C/script%3E"));

