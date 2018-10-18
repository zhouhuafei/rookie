// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
document.writeln("<style>");
document.writeln("/*zero*/");
document.writeln("body,div,ol,ul,li,dl,dd,dt,h1,h2,h3,h4,h5,h6,input,p,form,img{ padding:0; margin:0; font-weight:normal;}");
document.writeln("input,select,textarea{ outline:none; border:none; background:#FFF; resize:none;}");
document.writeln("body{ font-size:14px; font-family:\"微软雅黑\";}");
document.writeln("img{ border:none; outline:none;}");
document.writeln("ul,ol{ list-style-type:none; cursor:pointer;}");
document.writeln("p{ line-height:24px;}");
document.writeln("em,i,strong,b,small{ font-style:normal; font-weight:normal;}");
document.writeln("a,span,b,em,i,strong,small,label,img{ display:inline-block;}");
document.writeln("em,li,a{ transition:all 0.4s; -webkit-transition:all 0.4s; -moz-transition:all 0.4s; -o-transition:all 0.4s;}");
document.writeln("a{ color:#000; text-decoration:none; outline:none;}");
document.writeln("/*clearFix*/");
document.writeln(".clearFix{ clear:both; *zoom:1;}");
document.writeln(".clearFix:after{ clear:both; display:block; visibility:hidden; height:0; line-height:0; content:\"\"; font-size:0;}");
document.writeln("/*common*/");
document.writeln(".fl{ float:left;}");
document.writeln(".fr{ float:right;}");
document.writeln(".w1000{ width:1000px; margin:0 auto; overflow:hidden;}");
document.writeln("/*header*/");
document.writeln("#header{ height:122px; background:url(images/header.jpg) center center no-repeat;}");
document.writeln("/*headerNav*/");
document.writeln("#headerNav{ background:#0063b4;}");
document.writeln("#headerNav ul{ width:1008px; margin:0 auto;}");
document.writeln("#headerNav li{ float:left;}");
document.writeln("#headerNav a{ width:112px; text-align:center; height:56px; line-height:56px; font-size:18px; color:#fff; display:block;}");
document.writeln("#headerNav .navHot{ background:url(images/nav_hot.gif) 98% 6% no-repeat;}");
document.writeln("#headerNav .active{ background:#013b6b;}");
document.writeln("</style>");
document.writeln("<!--header-->");
document.writeln("<div id=\"header\"></div>");
document.writeln("<!--headerNav-->");
document.writeln("<div id=\"headerNav\">");
document.writeln("	<ul class=\"clearFix\">");
document.writeln("        	<li class=\"active\"><a href=\"/\" target=\"_blank\">首 页</a></li>");
document.writeln("        	<li><a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">医院简介</a></li>");
document.writeln("        	<li><a href=\"/zt/guchanglin/\" target=\"_blank\">权威专家</a></li>");
document.writeln("        	<li><a class=\"navHot\" href=\"/zt/tslf\" target=\"_blank\">特色疗法</a></li>");
document.writeln("        	<li><a class=\"navHot\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">媒体报道</a></li>");
document.writeln("        	<li><a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">典型案例</a></li>");
document.writeln("        	<li><a class=\"navHot\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">仪器设备</a></li>");
document.writeln("        	<li><a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">来院路线</a></li>");
document.writeln("        	<li><a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">在线预约</a></li>");
document.writeln("        </ul>");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("/*tabSwitch*/");
document.writeln("function tabSwitch(aBtn,aCut,oFalse){");
document.writeln("	var now=0;");
document.writeln("	var timer=null;");
document.writeln("	for(var i=0,len=aBtn.length; i<len;i++){");
document.writeln("		aBtn[i].index=i;");
document.writeln("		aBtn[i].onmouseover=function(){");
document.writeln("			now=this.index;");
document.writeln("			tab();");
document.writeln("		}			");
document.writeln("	}");
document.writeln("	function tab(){	");
document.writeln("		for(var i=0,len=aBtn.length; i<len;i++){");
document.writeln("			aBtn[i].className=\'\';");
document.writeln("			aCut&&(aCut[i].className=\'\');	");
document.writeln("		}");
document.writeln("		aBtn[now].className=\'active\';");
document.writeln("		aCut&&(aCut[now].className=\'active\');			");
document.writeln("	}");
document.writeln("	if(oFalse){");
document.writeln("		function next(){");
document.writeln("			now++;");
document.writeln("			now%=aBtn.length;");
document.writeln("			tab();	");
document.writeln("		}");
document.writeln("		timer=setInterval(next,6000);");
document.writeln("		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}");
document.writeln("		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,6000);}");
document.writeln("	}");
document.writeln("}");
document.writeln("/*headerNav*/");
document.writeln("$(function(){");
document.writeln("	var aBtn=$(\'#headerNav li\');");
document.writeln("	tabSwitch(aBtn);	");
document.writeln("})");
document.writeln("</script>");