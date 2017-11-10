/**
 * Created by Administrator on 2015/9/26.
 */
document.writeln("<style>");
document.writeln("        #sidebar {");
document.writeln("                width: 100px;");
document.writeln("                line-height: 34px;");
document.writeln("                text-align: center;");
document.writeln("                font-size: 14px;");
document.writeln("                color: #fff;");
document.writeln("                background: #444955;");
document.writeln("                position: fixed;");
document.writeln("                left: 0;");
document.writeln("                top: 100px;");
document.writeln("                cursor: pointer;");
document.writeln("        }");
document.writeln("        #sidebar li.active {");
document.writeln("                background: #006db8;");
document.writeln("        }");
document.writeln("        #sidebar li:hover {");
document.writeln("                background: #006db8;");
document.writeln("        }");
document.writeln("        #sidebar li.last {");
document.writeln("                line-height: 60px;");
document.writeln("                position: relative;");
document.writeln("        }");
document.writeln("        #sidebar li.last:after {");
document.writeln("                content: \"\";");
document.writeln("                display: block;");
document.writeln("                width: 0;");
document.writeln("                height: 0;");
document.writeln("                border: 10px solid transparent;");
document.writeln("                border-bottom: 10px solid #fff;");
document.writeln("                position: absolute;");
document.writeln("                left: 50%;");
document.writeln("                margin-left: -10px;");
document.writeln("                top: -5px;");
document.writeln("        }");
document.writeln("        #sidebar a {");
document.writeln("                color: inherit;");
document.writeln("        }");
document.writeln("</style>");
document.writeln("<div id=\"sidebar\">");
document.writeln("        <ul>");
document.writeln("                <li class=\"active\"><a href=\"/spzx/\" target=\"_blank\">ÊÓÆµÖÐÐÄ</a></li>");
document.writeln("                <li><a href=\"/pbl/\" target=\"_blank\">²¡ÀýÇ½</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/npx.html#npx\" target=\"_blank\">ÒøÐ¼²¡</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/bdf.html#bdf\" target=\"_blank\">°×ñ°·ç</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/index.html#qcd\" target=\"_blank\">Çà´º¶»</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/ban.html#ban\" target=\"_blank\">°ßÀà</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/hzj.html#hzj\" target=\"_blank\">»ÒÖ¸¼×</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/py.html#py\" target=\"_blank\">Æ¤Ñ×</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/sz.html#sz\" target=\"_blank\">ÊªÕî</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/tf.html#tf\" target=\"_blank\">ÍÑ·¢</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/xmz.html#xmz\" target=\"_blank\">Ý¡ÂéÕî</a></li>");
document.writeln("                <li><a href=\"/zt/2014_CaseList/ylb.html#ylb\" target=\"_blank\">ÓãÁÛ²¡</a></li>");
document.writeln("                <li><a href=\"/kangfubingli/\" target=\"_blank\">ÆäËû</a></li>");
document.writeln("                <li class=\"last\" onclick=\"window.scrollTo(0,0)\">µã»÷»Ø¶¥²¿</li>");
document.writeln("        </ul>");
document.writeln("</div>");
(function(doc,win){
        var arr = [
                'http://pfk.nanningyiyuan.com/spzx/',
                'http://pfk.nanningyiyuan.com/pbl/',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/npx.html#npx',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/bdf.html#bdf',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/index.html#qcd',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/ban.html#ban',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/hzj.html#hzj',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/py.html#py',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/sz.html#sz',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/tf.html#tf',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/xmz.html#xmz',
                'http://pfk.nanningyiyuan.com/zt/2014_CaseList/ylb.html#ylb',
                'http://pfk.nanningyiyuan.com/kangfubingli/'
        ];
        var iLen=arr.length;
        var aLi=doc.getElementById('sidebar').getElementsByTagName('li');
        var sHref=win.location.href;
        for(var i=0;i<iLen;i++){
                if(sHref==arr[i]){
                        aLi[i].className='active';
                }
        }
})(document,window);