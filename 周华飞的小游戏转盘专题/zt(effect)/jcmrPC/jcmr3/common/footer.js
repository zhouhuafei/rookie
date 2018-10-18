// JavaScript Document
document.writeln("<!--equipment-->");
document.writeln("<style>");
document.writeln("/*equipment*/");
document.writeln("#equipment{ width:1200px; margin:0 auto 42px; line-height:1;}");
document.writeln("#equipment ol{ margin-bottom:17px;}");
document.writeln("#equipment ul{ width:100%; height:132px; position:relative;}");
document.writeln("#equipment ul li{ height:100%; width:100%; opacity:0; filter:alpha(opacity:0); position:absolute; left:0; top:0;}");
document.writeln("#equipment ul li.active{ opacity:1; filter:alpha(opacity:100); z-index:2;}");
document.writeln("#equipment ul li a{ float:left; margin-right:3px; border:1px solid #fff;}");
document.writeln("#equipment ul li img{ border:1px solid #fff;}");
document.writeln("#equipment ul li a img{ width:195px; height:130px; border:none;}");
document.writeln("#equipment ul li a:hover{ border:1px solid #0aa0b4;}");
document.writeln("#equipment ul li.clearFix a.first{ margin-left:2px;}");
document.writeln("</style>");
document.writeln("<!--equipment-->");
document.writeln("<div id=\"equipment\">");
document.writeln("        <ol class=\"tils clearFix\">");
document.writeln("                <li class=\"active\"><span>尖端设备</span></li>");
document.writeln("                <li><span>品牌荣誉</span></li>");
document.writeln("                <li><span>监管单位</span></li>");
document.writeln("                <li class=\"last\"><span>媒体支持</span></li>");
document.writeln("        </ol>");
document.writeln("        <ul>");
document.writeln("        	<li class=\"clearFix active\">");
document.writeln("                	<a href=\"#\" target=\"_blank\" class=\"first\"><img src=\"images/equipment1.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/equipment2.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/equipment3.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/equipment4.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/equipment5.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\" class=\"noMr\"><img src=\"images/equipment6.jpg\" /></a>");
document.writeln("                </li>	");
document.writeln("        	<li class=\"clearFix\">");
document.writeln("                	<a href=\"#\" target=\"_blank\" class=\"first\"><img src=\"images/honour1.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/honour2.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/honour3.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/honour4.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\"><img src=\"images/honour5.jpg\" /></a>");
document.writeln("                	<a href=\"#\" target=\"_blank\" class=\"noMr\"><img src=\"images/honour6.jpg\" /></a>");
document.writeln("                </li>");
document.writeln("                <li><img src=\"images/supervision.jpg\" /></li>");
document.writeln("                <li><img src=\"images/media.jpg\" /></li>");
document.writeln("        </ul>");
document.writeln("</div>");
document.writeln("<script>");
document.writeln("var r=new Rookie();");
document.writeln("r.version();");
document.writeln("r.addEvent(window,\'load\',function(){");
document.writeln("	/*equipment*/");
document.writeln("	r.tabSwitch({aBtn:\"#equipment ol li\",aCut:\"#equipment ul li\"});");
document.writeln("})");
document.writeln("</script>");
document.writeln("");
document.writeln("<!--footer-->");
document.writeln("<style>");
document.writeln("/*footer*/");
document.writeln("#footer{ background:#2d2d2d; line-height:1;}");
document.writeln("#footer .footerMain{ width:1200px; margin:0 auto;}");
document.writeln("#footer ul{ padding:37px 0 125px 31px; color:#cecece;}");
document.writeln("#footer h2{ font-size:16px; color:#fff; margin-bottom:18px;}");
document.writeln("#footer p{ font-size:14px; margin-bottom:16px;}");
document.writeln("#footer p.last{ margin-bottom:25px;}");
document.writeln("#footer h3{ font-size:16px; color:#fff; margin-bottom:12px;}");
document.writeln("#footer small{ font-size:12px; margin-left:10px;}");
document.writeln("#footer li{ float:left;}");
document.writeln("#footer li.one{ width:360px;}");
document.writeln("#footer li.one a{ margin:0 25px 17px 0; font-size:14px; color:#cecece;}");
document.writeln("#footer li.two{ width:330px; padding:0 40px; position:relative;}");
document.writeln("#footer li.two:before,#footer li.two:after{ content:\"\"; display:block; width:1px; height:100%; background:#202020; border-right:1px solid #363636; position:absolute; top:0;}");
document.writeln("#footer li.two:before{ left:0;}");
document.writeln("#footer li.two:after{ right:0;}");
document.writeln("#footer li.two div{ width:4px; height:4px; background:#fff; animation:topToBottom 6s linear infinite; -webkit-animation:topToBottom 6s linear infinite; position:absolute; top:0; z-index:2; display:none\\0;}");
document.writeln("#footer li.two div.one{ left:-1px;}");
document.writeln("#footer li.two div.two{ right:-1px;}");
document.writeln("#footer li.two a{ color:#cecece;}");
document.writeln("#footer li a:hover{ color:#0aa0b4;}");
document.writeln("#footer li.thr{ width:260px; padding-left:40px;}");
document.writeln("#footer li.thr dl{ margin-bottom:26px;}");
document.writeln("#footer li dd{ width:100px; padding-left:25px; line-height:30px; font-size:12px;}");
document.writeln("/*common*/");
document.writeln(".tils{ border-bottom:1px solid #dcdcdc; font-size:20px; color:#656565;}");
document.writeln(".tils li{ float:left; width:121px; text-align:center; margin-bottom:-1px; position:relative;}");
document.writeln(".tils li.active{ color:#0aa0b4;}");
document.writeln(".tils li:after,.tils li:before{ content:\"\"; display:block; position:absolute;}");
document.writeln(".tils li:after{ width:1px; height:26px; background:#dcdcdc; right:0; top:0;}");
document.writeln(".tils li.last:after{ display:none;}");
document.writeln(".tils li:before{ width:0px; height:0px; border:6px solid transparent; border-top:10px solid #0aa0b4; left:50%; margin-left:-6px; bottom:-16px; opacity:0; filter:alpha(opacity:0); display:none\\0; transition:0.4s;}");
document.writeln(".tils li.active:before{ opacity:1; filter:alpha(opacity:100); display:block\\0;}");
document.writeln(".tils li span{ height:26px; line-height:26px; padding-bottom:9px; border-bottom:1px solid #dcdcdc;}");
document.writeln(".tils li.active span{ border-bottom:1px solid #0aa0b4;}");
document.writeln("</style>");
document.writeln("<!--footer-->");
document.writeln("<div id=\"footer\">");
document.writeln("	<div class=\"footerMain\">");
document.writeln("                <ul class=\"clearFix\">");
document.writeln("                        <li class=\"one\">");
document.writeln("                                <h2>精品项目</h2>");
document.writeln("                                <div class=\"clearFix\">");
document.writeln("                                        <a href=\"#\" target=\"_blank\">光学祛斑</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">红血丝</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">疤痕修复</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">酒糟鼻</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">冰点脱毛</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">胎记</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">美白</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">瘦脸针</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">玻尿酸</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">botox</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">除皱</a>");
document.writeln("                                        <a href=\"#\" target=\"_blank\">溶脂紧肤</a>");
document.writeln("                                </div>");
document.writeln("                        </li>");
document.writeln("                        <li class=\"two\">");
document.writeln("                        	<div class=\"one\"></div>");
document.writeln("                        	<div class=\"two\"></div>");
document.writeln("                        	<h2>来院路线</h2>");
document.writeln("                                <p>上海市杨浦区黄兴路286号</p>");
document.writeln("                                <p><a href=\"#\" target=\"_blank\">[查看交通路线图]</a></p>");
document.writeln("                                <p>沪医广【2011】第11-12-G168号</p>");
document.writeln("                                <p>沪ICP备09044608号</p>");
document.writeln("                                <p class=\"last\">沪ICP备09008778号</p>");
document.writeln("                                <h3>美丽热线<small>Beautiful hotline</small></h3>");
document.writeln("                                <img src=\"images/footer1.png\" />");
document.writeln("                        </li>");
document.writeln("                        <li class=\"thr\">");
document.writeln("                        	<dl class=\"clearFix\">");
document.writeln("                                	<dt class=\"fl\"><img src=\"images/er.jpg\" /></dt>");
document.writeln("                                        <dd class=\"fl\">扫描最新优惠<br />手机随时咨询<br />整形实时资讯<br />微信搜索上海江城</dd>");
document.writeln("                                </dl>");
document.writeln("                                <img src=\"images/footer2.png\" />");
document.writeln("                        </li>");
document.writeln("                </ul>");
document.writeln("        </div>");
document.writeln("</div>");