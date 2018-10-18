/**
 * Created by Administrator on 2015/9/25.
 */
document.writeln("<style>");
document.writeln("        #show-top {");
document.writeln("                transition: 0.4s;");
document.writeln("                height: 100px;");
document.writeln("                background: url(\"http://mr.skinjc.com/images/topss.jpg\") center center no-repeat;");
document.writeln("                overflow: hidden;");
document.writeln("        }");
document.writeln("        #show-top.active {");
document.writeln("                height: 0;");
document.writeln("        }");
document.writeln("        #show-top div {");
document.writeln("                height: 100%;");
document.writeln("                width: 1000px;");
document.writeln("                margin: 0 auto;");
document.writeln("                position: relative;");
document.writeln("        }");
document.writeln("        #show-top a {");
document.writeln("                display: block;");
document.writeln("                width: 100%;");
document.writeln("                height: 100%;");
document.writeln("        }");
document.writeln("        #show-top em {");
document.writeln("                width: 30px;");
document.writeln("                height: 30px;");
document.writeln("                position: absolute;");
document.writeln("                right: -106px;");
document.writeln("                top: 0;");
document.writeln("                z-index: 10;");
document.writeln("        }");
document.writeln("</style>");
document.writeln("<div id=\"show-top\">");
document.writeln("        <a href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\">");
document.writeln("                <div>");
document.writeln("                        <em></em>");
document.writeln("                </div>");
document.writeln("        </a>");
document.writeln("</div>");

var Game = null;
//创建构造函数
(function () {
        Game = function (json) {
                this.json = json || {};
                this.fnInit();
        };
        Game.prototype = {
                constructor: Game,
                fnInit: function () {
                        this.fnEle();
                        this.fnAutoHide();
                        this.fnClick();
                },
                fnEle: function () {
                        this.oParent = document.getElementById(this.json.oParent || 'show-top');
                        this.oCloase = this.oParent.getElementsByTagName(this.json.oCloase || 'em')[0];
                },
                fnAutoHide: function () {
                        var self = this;
                        setTimeout(function () {
                                self.oParent.className = 'active';
                        }, 8000);
                },
                fnHide: function () {
                        this.oParent.className = 'active';
                },
                fnShow: function () {
                        this.oParent.className = '';
                },
                fnClick: function () {
                        var self = this;
                        this.oCloase.onclick = function (ev) {
                                self.fnHide();
                                self.fnPreventDefault(ev);
                                self.fnStopPropagation(ev);
                        }
                },
                fnPreventDefault:function(ev){
                        var e=ev||event;
                        e.preventDefault?e.preventDefault():e.returnValue=false;
                },
                fnStopPropagation:function(ev){
                        var e=ev||event;
                        e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
                }
        }
})();
//调用构造函数
(function () {
        new Game();
})();