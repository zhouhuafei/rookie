// JavaScript Document
document.writeln("<!--banner-->");
document.writeln("<style>");
document.writeln("/*banner*/");
document.writeln("#banner{ height:400px; position:relative;}");
document.writeln("#banner ul{ width:100%; height:100%; position:relative;}");
document.writeln("#banner ul li{ width:100%; height:100%; position:absolute; left:0; top:0; opacity:0; filter:alpha(opacity:0); transition:0s;}");
document.writeln("#banner ul li a{ display:block; width:100%; height:100%; position:absolute; left:0; top:0; z-index:2;}");
document.writeln("#banner ul li div{ width:100%; height:100%; position:absolute; left:0; top:0;}");
document.writeln("#banner ul li div a{ width:300px; height:50px; left:700px; top:320px; z-index:3;}");
document.writeln("#banner ul li.active{ opacity:1; filter:alpha(opacity:100); z-index:2;}");
document.writeln("#banner ul li.banner1{ background:url(/images/banner1.jpg) center center no-repeat;}");
document.writeln("#banner ul li.banner2{ background:url(/images/banner2.jpg) center center no-repeat;}");
document.writeln("#banner ul li.banner3{ background:url(/images/banner3.jpg) center center no-repeat;}");
document.writeln("#banner ul li.banner3 div a{ left:380px; top:285px;}");
document.writeln("#banner ol{ height:10px; padding:10px 0; text-align:center; position:absolute; left:50%; margin-left:-500px; bottom:0px; z-index:3;}");
document.writeln("#banner ol li{ width:10px; height:10px; float:left; border-radius:50%; background:#dcdcdc; margin:0 5px;}");
document.writeln("#banner ol li.active{ border-radius:50%; background:#0aa0b4;}");
document.writeln("</style>");
document.writeln("<!--banner-->");
document.writeln("<div id=\"banner\">");
document.writeln("	<ul>");
document.writeln("        	<li class=\"banner1 active\">");
document.writeln("                	<a href=\"#\" target=\"_blank\"></a>");
document.writeln("                        <div><a href=\"#\" target=\"_blank\" ></a></div>");
document.writeln("                </li>");
document.writeln("        	<li class=\"banner2\">");
document.writeln("                	<a href=\"#\" target=\"_blank\"></a>");
document.writeln("                        <div><a href=\"#\" target=\"_blank\" ></a></div>");
document.writeln("                </li>");
document.writeln("        	<li class=\"banner3\">");
document.writeln("                	<a href=\"#\" target=\"_blank\"></a>");
document.writeln("                        <div><a href=\"#\" target=\"_blank\" ></a></div>");
document.writeln("                </li>");
document.writeln("        </ul>");
document.writeln("        <ol class=\"w1000\">");
document.writeln("        	<span class=\"clearFix\">");
document.writeln("                        <li class=\"active\"></li>");
document.writeln("                        <li></li>");
document.writeln("                        <li></li>");
document.writeln("                </span>");
document.writeln("        </ol>");
document.writeln("</div>");


var r=new Rookie();
r.tabSwitch({oParent:"#banner",bOpacity:true});





