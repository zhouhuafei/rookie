// JavaScript Document

/*  �����Զ���  */
//document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"><\/script>');
document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"></script>');
function swt_pfb(){
	var swt="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT88796525&r="+document.referrer+"&p="+window.location.href;
	window.open(swt);
}

//�����Դ�����ͨ���������
document.write('<style type="text/css">img{ border:none;} #LRfloater0 , #divMenu , #divMenu3{ display:none;}</style>');
//��һ�ε���ʱ��
setTimeout("OnlineIn()",3000);
function OnlineIn(){
	
	$("#divMenu").fadeIn(800);

}

//�������ʱ��
function OnlineOut(){
    $("#divMenu").fadeOut(800);

	setTimeout("OnlineIn()",30000);
}
//�м䵯����
document.write(' <div id="divMenu" style="position: fixed ! important;_position:absolute; _top:expression(offsetParent.scrollTop+100); left:50%; margin-left:-229px; top:100px; z-index: 2147483647; width:451px; height:351px;box-shadow:1px 1px 10px #000;"> ');
document.write(' <img src="images/swt_hzj.jpg" usemap="#myMap" /> ');
document.write(' <map name="myMap" id="myMap"> ');
document.write(' <area shape="rect" coords="426,1,451,29" href="javascript:void(0)" onClick="OnlineOut()" /> ');
document.write(' <area shape="rect" coords="93,305,362,341" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"/> ');
document.write(' </map> ');
document.write(' </div> ');




/************************�Ҳ�***********************/
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
document.writeln("#divRsjs{ display:block; width:28px; height:24px; font-family:΢���ź�; text-align:center; line-height:24px; color:#F00; position:absolute; top:7px; left:21px;}");
document.writeln("</style>");
/*����*/
document.writeln('<div id=\"divR\"> ');
document.writeln('	<a class=\"a01\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"������ѯ\"><span id=\"divRsjs\"></span></a>');
document.writeln('    <a class=\"a02\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"QQ��ѯ\"></a>');
document.writeln('    <a class=\"a03\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"ԤԼר��\"></a>');
document.writeln('    <a class=\"a04\" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" title=\"�Ż�\"></a>');
document.writeln('    <a class=\"a05\" href=\"javascript:void(0);\" onclick=\"pageScroll()\" title=\"���ض���\"></a>');
document.writeln('</div>');
//document.writeln('<div id="rightTop" style="width:145px;height:239px;position: fixed ! important;_position:absolute;_top:expression(offsetParent.scrollTop+100);border-collapse: collapse;top:5px;left:5px;z-index:9999999999999999; "><a href="/zixun/" target="_blank"><img src="/swt/images/51.gif"/></a></div>');

/*���ض���*/
function pageScroll(){
    //�����ݹ���ָ��������������һ�����������ҹ��������������ڶ������������¹�������������
    window.scrollBy(0,-100);
    //��ʱ�ݹ���ã�ģ���������Ч���ٶ�
    scrolldelay = setTimeout('pageScroll()',10);
	//��ȡscrollTopֵ��������DTD�ı�׼��ҳȡdocument.documentElement.scrollTop������ȡdocument.body.scrollTop��
	//��Ϊ����ֻ��һ������Ч����һ���ͺ�Ϊ0������ȡ��ֵ���Եõ���ҳ��������scrollTopֵ
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //�жϵ�ҳ�浽�ﶥ����ȡ����ʱ���루����ҳ��������������޷��������������ҳ�棩
    if(sTop==0) clearTimeout(scrolldelay);
}

/*�����*/
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   

var num = GetRandomNum(10,99);
 
$(document).ready(function() { 
	document.getElementById("divRsjs").innerHTML=num;
});
/************************�Ҳ����***********************/




