// JavaScript Document
/*
文件结构：     
                                                      
             /swt/
               | 
    |----------|----------|
images   swt.js   swt_news.js

images：用于存放图片
swt.js：为商务通代码
swt_news.js：为新闻商务通代码

代码结构：

1，第一次弹出时间,不设置代表页面一加载就弹出
2，被关闭后间隔弹出时间
3，弹窗
思路：屏蔽商务通原来的弹窗，方法onclick="openZoosUrl();return false;";用于onclick时间时触发商务通;

*/

//商务通代码

//加载商务通路径代码
document.write('<script language="javascript" src="http://pdt.zoosnet.net/JS/LsJS.aspx?siteid=PDT83653494&float=1"></script>');            
//屏蔽侧边悬浮框
document.write('<style type="text/css">img{border:none;} #LRfloater0{display:none;}  #LRfloater110{display:none;} #LRleft{display:none;}</style>');
//间隔弹出时间
function OnlineOut(){
    $("#divMenu").fadeOut(200);
	setTimeout("OnlineIn()",60000);
}
function OnlineIn(){
    $("#divMenu").fadeIn(200);
	
}
function FloatM(json){
	this.coords_rt=json.coords_rt||'0,0,0,0';//右上角关闭坐标
	this.coords_inline=json.coords_inline||'0,0,0,0';//图片中咨询坐标
	this.coords_inline_rt=json.coords_inline_rt||'0,0,0,0';//图片中咨询坐标
	this.coords_outline=json.coords_out||'0,0,0,0';//图片中关闭坐标
	this.pictype=json.pictype||'jpg';//图片格式
	//中间弹出框
	document.writeln("<div id=\"divMenu\" style=\"position:fixed ! important; _position:absolute; _top:expression(offsetParent.scrollTop+100); left:50%; margin-left:-211px; top:200px; z-index: 2147483647; width:450px; height:300px; border-collapse:collapse;box-shadow: 0 0 35px #000;\"> <img src=\"swt."+ this.pictype +"\" border=\"0\" usemap=\"#MapM\">");
	document.writeln("<map name=\"MapM\" id=\"MapM\">");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_rt +" href=\"javascript:void(0);\" onclick=\"OnlineOut();\"  target=\"_self\" />");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_inline +" href=\"javascript:void(0);\" target=\"_self\" onclick=\"openZoosUrl();return false\"/>");
	document.writeln("</map>");
	document.writeln("</div>");		
	
}
//间隔弹出时间
//节日弹出框
function closure2(){
    $('#divMenu2').fadeOut(1000);
    setTimeout("OnlineIn2()",60000);
}
function OnlineIn2(){
    $("#divMenu2").fadeIn(200);
	
}
//新弹出样式左侧
document.write('<style>a{text-decoration:none;color:black;}a:visited{/*color:black*/}#divR{ position:fixed; width:70px; height:284px; left:0; top:100px;z-index:20}#divR a{display:block; margin-bottom:1px;}.divRzx{ position:relative; background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 0; width: 70px; height: 60px; }.divRtell{position:relative; margin-bottom:1px;width: 70px; height: 58px;}.tell_link{  background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -185px; width: 70px; height: 58px; float:left}.divRqq{position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -61px; width: 70px; height: 60px;}.divRaddre{ position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -123px; width: 70px; height: 60px;}.backto_top{position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -244px; width: 70px; height: 40px;}.divRtell_inner{ position:absolute;   width: 300px; left:0; top:0 }.tell_form {background-color: #006db8;    float: left;    height: 58px;    width: 230px;}.tell_form .inner {display: inline;    float: right;    height: 33px;    margin-right: 1px;    margin-top: 12px;    width: 220px;}.tell_form .inner input, .tell_form .inner a {    display: block;    float: left;}.tell_form .inner input {    color: #303030;    font-size: 12px;    height: 23px;    padding: 5px 0 5px 3px;    width: 150px;}#sub_btn{background: url(http://pfb.skinjc.com/images/left.png) no-repeat -78px 0; width: 62px; height: 33px;}#divRsjs{ position:absolute; left:26px; top:7px; color:#F00; font-size: 14px;font-weight: bold;}</style>')
/*返回顶部*/
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果速度
    scrolldelay = setTimeout('pageScroll()',10);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
/*随机数*/
function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   
var numR = GetRandomNum(10,99);
 
$(document).ready(function() { 
	document.getElementById("divRsjs").innerHTML=numR;
});
$(function(){
	$('.divRtell').mouseenter(function(e) {
	$(this).find('a.tell_link').addClass('active');
		$(this).find('.divRtell_inner').stop().animate({left:'0px'},600,'swing');
	});
	$('.divRtell').mouseleave(function(e) {
	    $(this).find('a.tell_link').removeClass('active');
	    $(this).find('.divRtell_inner').stop().animate({left:'-230px'},400,'swing');
	});
})
/*百度离线宝*/
document.write('<div id="divR"><a href="javascript:void(0)" class="divRzx" onclick="openZoosUrl();return false;" target="_self" title="在线咨询"><i id="divRsjs">64</i></a><div class="divRtell"><div class="divRtell_inner" style="left:-230px;"><div class="tell_form"><div class="inner"><input type="text" value="输入您的电话号码" onfocus="value=\'\'" onblur="if(!value)value=defaultValue" id="tell_num"><a style="width:62px;height:33px;" id="sub_btn" href="javascript:void(0)"></a></div></div><a class="tell_link" href="javascript:void(0)" title="免费回电"></a></div></div><a href="javascript:void(0)" onclick="openZoosUrl();return false;" title="企业QQ" class="divRqq" target="_blank"></a><a href="javascript:void(0)"  onclick="openZoosUrl();return false;" class="divRaddre" title="地址"></a><a onclick="pageScroll()" target="_self" title="返回顶部" class="backto_top"  href="javascript:void(0)"></a></div>');
document.write('<script type="text/javascript"  data-lxb-uid="1085375" data-lxb-gid="3372" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '"></script>')
document.write('<script>document.getElementById("sub_btn").onclick = function () {lxb.call(document.getElementById("tell_num"));}</script>')
//百度统计
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fb1bb849c6b0cb1347de9e555b26f7c83' type='text/javascript'%3E%3C/script%3E"));
//百度统计2
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F71591f31478050f264e50efedb24ff97' type='text/javascript'%3E%3C/script%3E"));
//cnzz
document.write('<script src="http://s19.cnzz.com/z_stat.php?id=1000457461&web_id=1000457461" language="JavaScript"></script>')