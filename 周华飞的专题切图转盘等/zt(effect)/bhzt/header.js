// JavaScript Document
document.writeln("<!--header-->");
document.writeln("<link rel=\"stylesheet\" href=\"/tongyong/css/base.css\" />");
document.writeln("<script src=\"/tongyong/js/base.js\"></script>");
document.writeln("<style>");
document.writeln("#header{ height:17px; padding:5px 0; color:#a7a7a7; font-size:12px; background:#414141; line-height:1;}");
document.writeln("#header dl{ width:1200px; margin:0 auto;line-height:17px;}");
document.writeln("#header dt.icon1{ padding-left:20px; margin-right:33px; position:relative;}");
document.writeln("#header dt.icon1:before{ content:\"\"; display:block; width:2px; height:2px; background:#a7a7a7; position:absolute; left:7px; top:8px;}");
document.writeln("#header dt.icon2{ padding-left:22px; position:relative;}");
document.writeln("#header dt.icon2:before{ content:\"\"; display:block; width:17px; height:17px; background:url(/images/header.png) left top no-repeat; animation:circle 6s linear infinite; -webkit-animation:circle 6s linear infinite; position:absolute; left:0; top:0;}");
document.writeln("#header a{ float:left; width:17px; height:17px; margin-right:3px; color:#a7a7a7; background:url(/images/header.png) no-repeat;}");
document.writeln("#header a.one{ width:68px; background:none;}");
document.writeln("#header a.two{ background-position:left -36px;}");
document.writeln("#header a.thr{ background-position:left -108px;}");
document.writeln("#header a.fou{ background-position:left -180px; position:relative;}");
document.writeln("#header a.fiv{ background-position:left -252px;}");
document.writeln("#header a.six{ background-position:left -324px; margin-right:6px;}");
document.writeln("#header a.two:hover{ background-position:left -72px;}");
document.writeln("#header a.thr:hover{ background-position:left -144px;}");
document.writeln("#header a.fou:hover{ background-position:left -216px;}");
document.writeln("#header a.fiv:hover{ background-position:left -288px;}");
document.writeln("#header a.six:hover{ background-position:left -360px;}");
document.writeln("#header a.fou .erWeiCode{ width:130px; height:0; overflow:hidden; position:absolute; left:50%; margin-left:-65px; top:22px; z-index:5; transition:0.4s;}");
document.writeln("#header a.fou:hover .erWeiCode{ height:131px;}");
document.writeln("#header a.fou:hover .erWeiCode:before{ content:\"\"; display:block; width:100%; height:1px; background:rgba(10,160,180,0.9); animation:erWeiCode 4s linear infinite; -webkit-animation:erWeiCode 4s linear infinite; z-index:6; position:absolute; left:0; top:0;}");
document.writeln("</style>");
document.writeln("<div id=\"header\">");
document.writeln("	<dl class=\"clearFix\">");
document.writeln("			<dt class=\"fl icon1\">国家三级专科医院</dt>");
document.writeln("			<dt class=\"fl icon2\">门诊时间(无假日医院):8:00 - 17:00</dt>");
document.writeln("				<dd class=\"fr\">");
document.writeln("					<a class=\"one\">关注我们：</a>");
document.writeln("					<a href=\"http://weibo.com/shjiangcheng/profile?s=6cm7D0\" target=\"_blank\" class=\"two\"></a>");
document.writeln("					<a href=\"http://e.t.qq.com/jcpfkl20\" target=\"_blank\" class=\"thr\"></a>");
document.writeln("					<a href=\"#\" target=\"_blank\" class=\"fou\"><div class=\"erWeiCode\"><img src=\"/images/er.jpg\"></div></a>");
document.writeln("					<a href=\"http://user.qzone.qq.com/1054199822/main\" target=\"_blank\" class=\"fiv\"></a>");
document.writeln("					<a href=\"http://wapmr.skinjc.com/\" target=\"_blank\" class=\"six\"></a>");
document.writeln("				</dd>");
document.writeln("		</dl>");
document.writeln("</div>");
document.writeln("");
document.writeln("<!--logo-->");
document.writeln("<style>");
document.writeln("#logo{ height:83px; background:url(/images/logo.jpg) left top no-repeat;}");
document.writeln("#logo a{ display:block; width:100%; height:100%;}");
document.writeln("</style>");
document.writeln("<div id=\"logo\" class=\"w1200\"><a target=\"_blank\" href=\"/\"></a></div>");