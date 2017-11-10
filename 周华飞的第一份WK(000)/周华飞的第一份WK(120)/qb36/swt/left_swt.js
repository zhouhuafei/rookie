// JavaScript Document

//document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"><\/script>');
document.writeln('<script language="javascript" src="http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT88796525&float=1"></script>');
function swt_pfb(){
	var swt="http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT88796525&r="+document.referrer+"&p="+window.location.href;
	window.open(swt);
}

/*setTimeout("showL()",3000);
function showL()
{
    $("#Pcenter").fadeOut(1000); 
	$("#Pleft").fadeIn(1000);
	setTimeout("showC()",20000); 
}
function showC()
{
	$("#Pcenter").fadeIn(1000);
	$("#Pleft").fadeOut(1000);
	setTimeout("showL()",20000); 
}
function closeC(){
	$('#Pcenter').fadeOut(1000);
	setTimeout("show()",20000); 
}
function closeL(){
    $("#Pcenter").fadeIn(1000);
	$('#Pleft').fadeOut(1000);
	setTimeout("showL()",20000); 
}*/
setTimeout("show()",5000);
function show()
{
	$("#Pcenter").fadeIn(1000);
	$("#Pleft").fadeOut(800);
}
function closeC(){
	$('#Pcenter').fadeOut(800);
	$("#Pleft").fadeIn(800);
	setTimeout("show()",50000); 
}
function OnlineInL(){
	$("#Pleft").fadeIn(1000);
}
function closeL(){
	$('#Pleft').fadeOut(1000);
	setTimeout("show()",50000); 
}

document.writeln('<style type="text/css">img{border:none;}#LRfloater0{display:none;}</style>');
document.writeln('<div id="Pleft" style="position: fixed ! important;');
document.writeln('_position:absolute;');
document.writeln('_bottom:auto;');
document.writeln('_top:expression(eval(document.documentElement.scrollTop+40));');
document.writeln('left: 2px; ');
document.writeln('top: 130px;'); 
document.writeln('z-index: 99999; ');
document.writeln('width: 138px;'); 
document.writeln('height: 340px;"> ');
document.writeln('<img src="swt/Pleft.gif" usemap="#myMap2"/>');
document.writeln('<map id="myMap2" name="myMap2"> ');
document.writeln('<area shape="rect" coords="3,19,157,386" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"/>');
document.writeln('<area shape="rect" coords="136,-2,159,18" href="javascript:void(0)" target="_self" onclick="closeL();"/>');
document.writeln('</map>');
document.writeln('</div>');

document.writeln('<div id="Pcenter" style=" z-index: 99999; display:none;box-shadow: rgb(0, 0, 0) 1px 1px 10px;');
document.writeln('position: fixed ! important;');
document.writeln('_position:absolute; ');
document.writeln('_top:expression(offsetParent.scrollTop+100); ');
document.writeln('left: 50%; ');
document.writeln('margin-left:-224px; ');
document.writeln('top: 110px; ');
document.writeln('width: 450px; ');
document.writeln('height: 300px; ');
document.writeln('border-collapse: collapse;">');
document.writeln('<div style="width:450px;height:300px;position:relative;">');
document.writeln('<img style=" z-index:214545; box-shadow:1px 1px 10px #000; " src="swt/center.gif" border="0" usemap="#myCenter" />  ');
document.writeln('<map name="myCenter" id="myCenter">');
document.writeln('<area shape="rect" coords="220,227,407,277" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;" />');
document.writeln('<area shape="circle" coords="435,13,17" href="javascript:void(0);" target="_self" onclick="closeC()"  />');
document.writeln('</map>');
document.writeln('</div>');
document.writeln('</div>');
//document.writeln('<div id="rightTop" style="width:145px;height:239px;position: fixed ! important;_position:absolute;_top:expression(offsetParent.scrollTop+100);border-collapse: collapse;top:5px;right:5px;z-index:9999999999999999; "><a href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"><img src="/swt/images/51.gif"/></a></div>');