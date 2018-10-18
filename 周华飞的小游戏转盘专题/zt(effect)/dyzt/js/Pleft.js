
/*function show()
{
	$("#divMenu").fadeIn(1000);
	$("#Pleft").fadeOut(800);
}
function OnlineOut(){
//	$('#divMenu').fadeOut(800);
	$("#Pleft").fadeIn(800);
	setTimeout("show()",50000); 
}*/
function OnlineInL(){
	$("#Pleft").fadeIn(1000);
}
function closeL(){
	$('#Pleft').fadeOut(1000);
	setTimeout("OnlineInL()",50000); 
}

document.writeln('<style type="text/css">img{border:none;}#LRfloater0{display:none;}</style>');
document.writeln('<div id="Pleft" style="position: fixed ! important;');
document.writeln('_position:absolute;');
document.writeln('_bottom:auto;');
document.writeln('_top:expression(eval(document.documentElement.scrollTop+40));');
document.writeln('left: 2px; ');
document.writeln('top: 100px;'); 
document.writeln('z-index: 20; ');
document.writeln('width: 120px;'); 
document.writeln('height: 350px;"> ');
document.writeln('<img src="Pleft.gif" usemap="#myMap2"/>');
document.writeln('<map id="myMap2" name="myMap2"> ');
document.writeln('<area shape="rect" coords="3,19,157,386" href="javascript:void(0);return false;" onclick="openZoosUrl();return false;"/>');
document.writeln('<area shape="rect" coords="100,0,120,12" href="javascript:void(0)" target="_self" onclick="closeL();"/>');
document.writeln('</map>');
document.writeln('</div>');