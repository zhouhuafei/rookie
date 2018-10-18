//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
document.writeln("		<style>");
document.writeln("		/*banner*/");
document.writeln("		#banner { height: 400px; overflow: hidden; background: #d7eaf8; position: relative; }");
document.writeln("		#banner ol { text-align: center; position: absolute; left: 0; bottom: 21px; width: 100%; z-index: 5; }");
document.writeln("		#banner ol li { width: 8px; height: 8px; border-radius: 50%; display: inline-block; background: #4d4d4d; margin: 0 2px; }");
document.writeln("		#banner ol li.on { background: #006db8; }");
document.writeln("		#banner ul { height: 100%; }");
document.writeln("		#banner ul li { height: 100%; }");
document.writeln("		#banner ul a { width: 100%; height: 100%; }");
document.writeln("		#banner ul li.banner-one { background: url(\"images/banner1.jpg\") center no-repeat; }");
document.writeln("		#banner ul li.banner-two { background: url(\"images/banner2.jpg\") center no-repeat; }");
document.writeln("		#banner ul li.banner-thr { background: url(\"images/banner3.jpg\") center no-repeat; }");
document.writeln("		#banner ul li.banner-fou { background: url(\"images/banner4.jpg\") center no-repeat; }");
document.writeln("		#banner ul li.banner-fiv { background: url(\"images/banner5.jpg\") center no-repeat; }");
document.writeln("		</style>");
document.writeln("                <!--banner-->");
document.writeln("                <div id=\"banner\">");
document.writeln("                        <ol class=\"hd\">");
document.writeln("                                <li class=\"on\"></li>");
document.writeln("                                <li></li>");
document.writeln("                                <li></li>");
document.writeln("                                <li></li>");
document.writeln("                                <li></li>");
document.writeln("                        </ol>");
document.writeln("                        <ul class=\"bd\">");
document.writeln("                                <li class=\"banner-one\"><a href=\"\" target=\"_blank\"></a></li>");
document.writeln("                                <li class=\"banner-two\"><a href=\"\" target=\"_blank\"></a></li>");
document.writeln("                                <li class=\"banner-thr\"><a href=\"\" target=\"_blank\"></a></li>");
document.writeln("                                <li class=\"banner-fou\"><a href=\"\" target=\"_blank\"></a></li>");
document.writeln("                                <li class=\"banner-fiv\"><a href=\"\" target=\"_blank\"></a></li>");
document.writeln("                        </ul>");
document.writeln("                </div>");

$(function(){
        /*banner*/
        jQuery("#banner").slide({effect:"fold",autoPlay:true,interTime:3000});
});