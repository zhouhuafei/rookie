// JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
document.writeln("<style>");
document.writeln("/*styleNav*/");
document.writeln("#styleNav{ width:1000px; margin:0 auto;}");
document.writeln("#styleNav li{ float:left; background:#969696; margin-right:10px;}");
document.writeln("#styleNav a{ width:192px; height:82px; display:block; font-size:18px; color:#fff; line-height:41px;}");
document.writeln("#styleNav .active{ background:#0064b4;}");
document.writeln("#styleNav em{ width:64px; height:64px; display:block; float:left; margin:10px 18px 0 16px; border-radius:50%; transition:all 0.4s;}");
document.writeln("#styleNav p{ width:80px; padding-top:6px; line-height:34px; float:left; word-spacing:14px;}");
document.writeln("#styleNav .styleEm1{ background:url(images/style_icon1.jpg) left top no-repeat;}");
document.writeln("#styleNav .styleEm2{ background:url(images/style_icon2.jpg) left top no-repeat;}");
document.writeln("#styleNav .styleEm3{ background:url(images/style_icon3.jpg) left top no-repeat;}");
document.writeln("#styleNav .styleEm4{ background:url(images/style_icon4.jpg) left top no-repeat;}");
document.writeln("#styleNav .styleEm5{ background:url(images/style_icon5.jpg) left top no-repeat;}");
document.writeln("#styleNav .active em{ transform:rotatey(360deg); -webkit-transform:rotatey(360deg);}");
document.writeln("#styleNav .active .styleEm1{ background:url(images/style_icon1b.jpg) left top no-repeat;}");
document.writeln("#styleNav .active .styleEm2{ background:url(images/style_icon2b.jpg) left top no-repeat;}");
document.writeln("#styleNav .active .styleEm3{ background:url(images/style_icon3b.jpg) left top no-repeat;}");
document.writeln("#styleNav .active .styleEm4{ background:url(images/style_icon4b.jpg) left top no-repeat;}");
document.writeln("#styleNav .active .styleEm5{ background:url(images/style_icon5b.jpg) left top no-repeat;}");
document.writeln("</style>");
document.writeln("<!--styleNav-->");
document.writeln("<div id=\"styleNav\">");
document.writeln("	<ul class=\"clearFix\">");
document.writeln("        	<li class=\"active\">");
document.writeln("                	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                        	<em class=\"styleEm1\"></em>");
document.writeln("                                <p>寻常型<br />银屑病</p>                            ");
document.writeln("                        </a>");
document.writeln("                </li>");
document.writeln("        	<li>");
document.writeln("                	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                        	<em class=\"styleEm2\"></em>");
document.writeln("                                <p>关节型<br />银屑病</p>");
document.writeln("                	</a>");
document.writeln("                </li>  ");
document.writeln("        	<li>");
document.writeln("                	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                        	<em class=\"styleEm3\"></em>");
document.writeln("                                <p>脓包型<br />银屑病</p>");
document.writeln("                	</a>");
document.writeln("                </li> ");
document.writeln("        	<li>");
document.writeln("                	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                        	<em class=\"styleEm4\"></em>");
document.writeln("                                <p>红皮型<br />银屑病</p>");
document.writeln("                	</a>");
document.writeln("                </li>       ");
document.writeln("        	<li style=\"margin-right:0;\">");
document.writeln("                	<a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                        	<em class=\"styleEm5\"></em>");
document.writeln("                                <p>掌 趾<br />银屑病</p>      ");
document.writeln("                        </a>");
document.writeln("                </li>     	");
document.writeln("        </ul>");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("/*styleNav*/");
document.writeln("$(function(){");
document.writeln("	var aBtn=$(\'#styleNav li\');");
document.writeln("	tabSwitch(aBtn);	");
document.writeln("})");
document.writeln("</script>");