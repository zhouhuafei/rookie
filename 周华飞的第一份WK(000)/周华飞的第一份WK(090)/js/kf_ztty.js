// JavaScript Document
/*
�ļ��ṹ��     
                                                      
             /swt/
               | 
    |----------|----------|
images   swt.js   swt_news.js

images�����ڴ��ͼƬ
swt.js��Ϊ����ͨ����
swt_news.js��Ϊ��������ͨ����

����ṹ��

1����һ�ε���ʱ��,�����ô���ҳ��һ���ؾ͵���
2�����رպ�������ʱ��
3������
˼·����������ͨԭ���ĵ���������onclick="openZoosUrl();return false;";����onclickʱ��ʱ��������ͨ;

*/

//����ͨ����

//��������ͨ·������
document.write('<script language="javascript" src="http://pdt.zoosnet.net/JS/LsJS.aspx?siteid=PDT83653494&float=1"></script>');            
//���β��������
document.write('<style type="text/css">img{border:none;} #LRfloater0{display:none;}  #LRfloater110{display:none;} #LRleft{display:none;}</style>');
//�������ʱ��
function OnlineOut(){
    $("#divMenu").fadeOut(200);
	setTimeout("OnlineIn()",60000);
}
function OnlineIn(){
    $("#divMenu").fadeIn(200);
	
}
function FloatM(json){
	this.coords_rt=json.coords_rt||'0,0,0,0';//���Ͻǹر�����
	this.coords_inline=json.coords_inline||'0,0,0,0';//ͼƬ����ѯ����
	this.coords_inline_rt=json.coords_inline_rt||'0,0,0,0';//ͼƬ����ѯ����
	this.coords_outline=json.coords_out||'0,0,0,0';//ͼƬ�йر�����
	this.pictype=json.pictype||'jpg';//ͼƬ��ʽ
	//�м䵯����
	document.writeln("<div id=\"divMenu\" style=\"position:fixed ! important; _position:absolute; _top:expression(offsetParent.scrollTop+100); left:50%; margin-left:-211px; top:200px; z-index: 2147483647; width:450px; height:300px; border-collapse:collapse;box-shadow: 0 0 35px #000;\"> <img src=\"swt."+ this.pictype +"\" border=\"0\" usemap=\"#MapM\">");
	document.writeln("<map name=\"MapM\" id=\"MapM\">");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_rt +" href=\"javascript:void(0);\" onclick=\"OnlineOut();\"  target=\"_self\" />");
	document.writeln("  <area shape=\"rect\" coords="+ this.coords_inline +" href=\"javascript:void(0);\" target=\"_self\" onclick=\"openZoosUrl();return false\"/>");
	document.writeln("</map>");
	document.writeln("</div>");		
	
}
//�������ʱ��
//���յ�����
function closure2(){
    $('#divMenu2').fadeOut(1000);
    setTimeout("OnlineIn2()",60000);
}
function OnlineIn2(){
    $("#divMenu2").fadeIn(200);
	
}
//�µ�����ʽ���
document.write('<style>a{text-decoration:none;color:black;}a:visited{/*color:black*/}#divR{ position:fixed; width:70px; height:284px; left:0; top:100px;z-index:20}#divR a{display:block; margin-bottom:1px;}.divRzx{ position:relative; background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 0; width: 70px; height: 60px; }.divRtell{position:relative; margin-bottom:1px;width: 70px; height: 58px;}.tell_link{  background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -185px; width: 70px; height: 58px; float:left}.divRqq{position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -61px; width: 70px; height: 60px;}.divRaddre{ position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -123px; width: 70px; height: 60px;}.backto_top{position:relative;background: url(http://pfb.skinjc.com/images/left.png) no-repeat 0 -244px; width: 70px; height: 40px;}.divRtell_inner{ position:absolute;   width: 300px; left:0; top:0 }.tell_form {background-color: #006db8;    float: left;    height: 58px;    width: 230px;}.tell_form .inner {display: inline;    float: right;    height: 33px;    margin-right: 1px;    margin-top: 12px;    width: 220px;}.tell_form .inner input, .tell_form .inner a {    display: block;    float: left;}.tell_form .inner input {    color: #303030;    font-size: 12px;    height: 23px;    padding: 5px 0 5px 3px;    width: 150px;}#sub_btn{background: url(http://pfb.skinjc.com/images/left.png) no-repeat -78px 0; width: 62px; height: 33px;}#divRsjs{ position:absolute; left:26px; top:7px; color:#F00; font-size: 14px;font-weight: bold;}</style>')
/*���ض���*/
function pageScroll(){
    //�����ݹ���ָ��������������һ�����������ҹ��������������ڶ������������¹�������������
    window.scrollBy(0,-100);
    //��ʱ�ݹ���ã�ģ���������Ч���ٶ�
    scrolldelay = setTimeout('pageScroll()',10);
    //��ȡscrollTopֵ��������DTD�ı�׼��ҳȡdocument.documentElement.scrollTop������ȡdocument.body.scrollTop����Ϊ����ֻ��һ������Ч����һ���ͺ�Ϊ0������ȡ��ֵ���Եõ���ҳ��������scrollTopֵ
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //�жϵ�ҳ�浽�ﶥ����ȡ����ʱ���루����ҳ��������������޷��������������ҳ�棩
    if(sTop==0) clearTimeout(scrolldelay);
}
/*�����*/
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
/*�ٶ����߱�*/
document.write('<div id="divR"><a href="javascript:void(0)" class="divRzx" onclick="openZoosUrl();return false;" target="_self" title="������ѯ"><i id="divRsjs">64</i></a><div class="divRtell"><div class="divRtell_inner" style="left:-230px;"><div class="tell_form"><div class="inner"><input type="text" value="�������ĵ绰����" onfocus="value=\'\'" onblur="if(!value)value=defaultValue" id="tell_num"><a style="width:62px;height:33px;" id="sub_btn" href="javascript:void(0)"></a></div></div><a class="tell_link" href="javascript:void(0)" title="��ѻص�"></a></div></div><a href="javascript:void(0)" onclick="openZoosUrl();return false;" title="��ҵQQ" class="divRqq" target="_blank"></a><a href="javascript:void(0)"  onclick="openZoosUrl();return false;" class="divRaddre" title="��ַ"></a><a onclick="pageScroll()" target="_self" title="���ض���" class="backto_top"  href="javascript:void(0)"></a></div>');
document.write('<script type="text/javascript"  data-lxb-uid="1085375" data-lxb-gid="3372" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '"></script>')
document.write('<script>document.getElementById("sub_btn").onclick = function () {lxb.call(document.getElementById("tell_num"));}</script>')
//�ٶ�ͳ��
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fb1bb849c6b0cb1347de9e555b26f7c83' type='text/javascript'%3E%3C/script%3E"));
//�ٶ�ͳ��2
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F71591f31478050f264e50efedb24ff97' type='text/javascript'%3E%3C/script%3E"));
//cnzz
document.write('<script src="http://s19.cnzz.com/z_stat.php?id=1000457461&web_id=1000457461" language="JavaScript"></script>')