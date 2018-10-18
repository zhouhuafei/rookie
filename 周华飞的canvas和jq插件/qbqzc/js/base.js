//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
/*Rookie*/
function Rookie() {
}
Rookie.prototype.version = function () {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        if (Sys.ie < 8) {
                alert('您的浏览器版本过低,建议下载新版浏览器');
                window.top.location.href = "http://www.firefox.com.cn/download/";
                return false;
        }
}
Rookie.prototype.addEvent = function (obj, ev, fn) {
        obj.attachEvent ? obj.attachEvent('on' + ev, function () {
                fn.call(obj, window.event);
        }) : obj.addEventListener(ev, fn, false);
}
Rookie.prototype.getStyle = function (obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}
Rookie.prototype.hasClass = function (obj, sClass) {
        var re = new RegExp('\\b' + sClass + '\\b', 'ig');
        return obj.className.match(re);
}
Rookie.prototype.addClass = function (obj, sClass) {
        var re = new RegExp('\\b' + sClass + '\\b', 'ig');
        if (!this.hasClass(obj, sClass)) {
                if (!obj.className) {
                        obj.className = sClass;
                } else {
                        obj.className += ' ' + sClass;
                }
        }
}
Rookie.prototype.removeClass = function (obj, sClass) {
        var re = new RegExp('(\\s)?\\b' + sClass + '\\b', 'ig');
        if (this.hasClass(obj, sClass)) {
                obj.className = obj.className.replace(re, '');
        }
}
Rookie.prototype.move = function (obj, json, fn) {
        var self = this;
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {
                        var cur = attr == 'opacity' ? cur = Math.round(parseFloat(self.getStyle(obj, attr)) * 100) : cur = parseInt(self.getStyle(obj, attr));
                        var speed = (json[attr] - cur) / 10;
                        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                        cur != json[attr] && (bStop = false);
                        if (attr == 'opacity') {
                                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                                obj.style.opacity = (cur + speed) / 100;
                        } else {
                                obj.style[attr] = cur + speed + 'px';
                        }
                }
                if (bStop) {
                        clearInterval(obj.timer);
                        fn && fn();
                }
        }, 30)
}
Rookie.prototype.tabSwitch = function (json) {
        var json = json || {};
        var type = json.type || 'mouseover';
        var oParent = document.querySelector(json.oParent);
        if (!oParent) {
                throw new Error('站住,使用我插件的那枚菜鸟,你是不是忘了加参数的oParent属性,选取元素时请不要选取到了不存在的元素!');
                return;
        }
        var aBtn = json.aBtn ? document.querySelectorAll(json.aBtn) : oParent.querySelectorAll('ol li')[0] == undefined ? null : oParent.querySelectorAll('ol li');
        var aCut = json.aCut ? document.querySelectorAll(json.aCut) : oParent.querySelectorAll('ul li')[0] == undefined ? null : oParent.querySelectorAll('ul li');
        var iLen = aBtn ? aBtn.length : aCut.length;
        var iCutWidth = aCut ? aCut[0].offsetWidth : 0;
        var iCutHeight = aCut ? aCut[0].offsetHeight : 0;
        var oPrev = json.oPrev ? document.querySelector(json.oPrev) : oParent.querySelector(json.oParent + ' .prev');
        var oNext = json.oNext ? document.querySelector(json.oNext) : oParent.querySelector(json.oParent + ' .next');
        var bAutoPlay = json.bAutoPlay || false;
        var bOpacity = json.bOpacity || false;
        var iBtnNow = 0;
        var iCutNow = 0;
        var timer = null;
        var self = this;
        var dir = json.dir || 'left';
        var oCut = aCut ? aCut[0].parentNode : null;
        bOpacity && aCut && this.addClass(aCut[0], 'active');
        for (var i = 0; i < iLen; i++) {
                if (json.dir == 'top') {
                        aCut && (aCut[i].style.cssText = 'float:none;');
                } else if ((!json.dir || json.dir == 'left') && !json.bOpacity) {
                        aCut && (aCut[i].style.cssText = 'float:left;');//for循环必须在下面那个if的上面,否则aCut的样式添加会失败,因为会受到oCut.innerHTML='';的影响
                } else if (json.bOpacity && aCut) {
                        aCut[i].style.cssText = 'position:absolute;left:0;top:0;opacity:0;filter:alpha(opacity:0);';
                        if (this.hasClass(aCut[i], 'active')) {
                                aCut[i].style.zIndex = 2;
                                aCut[i].style.cssText = 'opacity:1;filter:alpha(opacity:100);';
                        }
                        oCut && (oCut.style.position = "relative");
                        oCut && (oCut.style.height = aCut[0].offsetHeight + 'px');//建议在css样式里添加
                        //aBtn&&(aBtn[0].parentNode.style.zIndex=3);//建议在css样式里添加
                        oPrev && (oPrev.style.zIndex = 3);//建议在css样式里添加
                        oNext && (oNext.style.zIndex = 3);//建议在css样式里添加
                }
        }
        aBtn && (aBtn[0].parentNode.style.zIndex = 3);//建议在css样式里添加
        if (oCut) {
                if (!json.bOpacity) {
                        var oCutDiv = document.createElement('div');
                        oCutDiv.style.position = "relative";
                        oCutDiv.style.left = 0;
                        oCutDiv.style.top = 0;
                        json.dir != 'top' ? (oCutDiv.style.height = aCut && aCut[0].offsetHeight + 'px') : (oCutDiv.style.height = oCutDiv.style.height = aCut && aCut[0].offsetHeight * iLen * 2 + 'px');
                        json.dir != 'top' && (oCutDiv.style.width = iCutWidth * iLen + 'px');
                        if (oCut && (oPrev || oNext || bAutoPlay)) {
                                oCut.innerHTML += oCut.innerHTML;
                                if (json.dir != 'top')(oCutDiv.style.width = iLen * iCutWidth * 2 + 'px');
                        }
                        oCutDiv.innerHTML = oCut.innerHTML;
                        oCut.innerHTML = '';//会影响到上面那个for循环里aCut的样式添加(如果放在aCut的样式添加之前);
                        oCut.appendChild(oCutDiv);
                }
        }
        if (aBtn) {
                for (var i = 0; i < iLen; i++) {
                        aBtn[i].index = i;
                        aBtn[i]['on' + type] = function () {
                                iBtnNow = this.index;
                                iCutNow = this.index;
                                tab();
                                if (json.bOpacity) {
                                        return;
                                }
                                oCut && json.dir == 'top' ? oCutDiv && self.move(oCutDiv, {top: -iCutHeight * iBtnNow}, active) : oCutDiv && self.move(oCutDiv, {left: -iCutWidth * iBtnNow}, active);
                        }
                }
        }
        function active() {
                aCut = oParent.querySelectorAll('ul li');
                setTimeout(function () {
                        self.addClass(aCut[iCutNow], 'active')
                }, 30);
        }

        oCut && active();
        function tab() {
                for (var i = 0; i < iLen; i++) {
                        aBtn && iBtnNow != i && self.removeClass(aBtn[i], 'active');
                        aCut && iBtnNow != i && self.removeClass(aCut[i], 'active');
                        //aBtn&&self.removeClass(aBtn[i],'active');
                        //aCut&&self.removeClass(aCut[i],'active');
                        !bOpacity && iCutNow == iLen && self.removeClass(aCut[iLen], 'active');
                        if (aCut && json.bOpacity) {
                                aCut[i].style.zIndex = 1;
                                self.move(aCut[i], {opacity: 0});
                        }
                }
                aBtn && self.addClass(aBtn[iBtnNow], 'active');
                bOpacity && aCut && self.addClass(aCut[iBtnNow], 'active');
                if (aCut && json.bOpacity) {
                        aCut[iBtnNow].style.zIndex = 2;
                        self.move(aCut[iBtnNow], {opacity: 100});
                }
        }

        function next() {
                iBtnNow++;
                iBtnNow %= iLen;
                tab();
                if (iCutNow == iLen) {
                        iCutNow = 0;
                        if (json.bOpacity) {
                                return;
                        }
                        oCut && json.dir == 'top' ? oCutDiv && (oCutDiv.style.top = 0) : oCutDiv && (oCutDiv.style.left = 0);
                }
                ;
                if (json.bOpacity) {
                        return;
                }
                oCut && json.dir == 'top' ? oCutDiv && self.move(oCutDiv, {top: -iCutHeight * (iCutNow + 1)}, active) : oCutDiv && self.move(oCutDiv, {left: -iCutWidth * (iCutNow + 1)}, active);
                iCutNow++;
        }

        function prev() {
                iBtnNow--;
                iBtnNow == -1 && (iBtnNow = iLen - 1);
                tab();
                if (iCutNow == 0) {
                        iCutNow = iLen;
                        if (json.bOpacity) {
                                return;
                        }
                        oCut && json.dir == 'top' ? oCutDiv && (oCutDiv.style.top = -iCutHeight * iCutNow + 'px') : oCutDiv && (oCutDiv.style.left = -iCutWidth * iCutNow + 'px');
                }
                ;
                if (json.bOpacity) {
                        return;
                }
                oCut && json.dir == 'top' ? oCutDiv && self.move(oCutDiv, {top: -iCutHeight * (iCutNow - 1)}, active) : oCutDiv && self.move(oCutDiv, {left: -iCutWidth * (iCutNow - 1)}, active);
                iCutNow--;
        }

        function auto() {
                timer = setInterval(next, 20000);
        }

        if (bAutoPlay) {
                auto();
                oCut && (oCut.onmouseover = function () {
                        clearInterval(timer);
                })
                oCut && (oCut.onmouseout = function () {
                        auto();
                })
        }
        oPrev && (oPrev.onclick = prev);
        oNext && (oNext.onclick = next);
}
Rookie.prototype.fillZero = function (n) {
        return n < 10 ? '0' + n : '' + n;
}
Rookie.prototype.upDate = function (obj, iDay, type) {
        var obj = document.querySelector(obj);
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        var iYear = oDate.getFullYear();
        var iMonth = oDate.getMonth() + 1;
        var iDate = oDate.getDate();
        if (type == true) {
                obj.innerHTML = iYear + '年' + this.fillZero(iMonth) + '月' + this.fillZero(iDate) + '日';
        } else {
                obj.innerHTML = iMonth + '月' + iDate + '日';
        }
}
Rookie.prototype.offset = function (obj) {
        if (typeof obj == 'string') {
                var obj = document.querySelector(obj);
        }
        var x = 0, y = 0;
        while (obj != null) {
                x += obj.offsetLeft;
                y += obj.offsetTop;
                obj = obj.offsetParent;
        }
        return {x: x, y: y}
}
Rookie.prototype.flowNav = function (json) {
        var obj = document.querySelector(json.obj);
        var aChildren = document.querySelectorAll(json.child);
        var aTarget = document.querySelectorAll(json.target);
        var iObjTop = this.offset(obj).y;
        var aTargetTop = [];
        var iLen = aChildren.length;
        //var iParentH=obj.parentNode.offsetHeight;//这个变量是根据江城美容列表页进行的特殊处理,其他专题可以删除
        var iObjH = obj.offsetHeight + 0//50//11;//+11是针对江城美容列表页进行的特殊处理,其他专题可以删除+11或者根据情况修改;
        //如果侧边栏是竖着的只要再添一个控制参数就可以控制了(以下是针对粘性导航为竖着的情况而保留的);
        /*if(json.iObjHeight){
         if(typeof json.iObjHeight=='number'){
         var iObjH=json.iObjHeight;
         }else{
         var iObjH=obj.offsetHeight;
         }
         }else{
         var iObjH=0
         };
         */
        var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var now = 0;
        var speed = 0;
        var timer = null;
        var self = this;
        //以下是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
        /*
         var oBtn=document.querySelector(json.oBtn);
         var aCut=document.querySelectorAll(json.aCut);
         if(oBtn&&aCut){
         oBtn.onclick=function(){
         clearInterval(timer);
         window.scrollTo(0,iObjTop);
         for(var i=0;i<iLen;i++){
         self.removeClass(aChildren[i],'active');
         }
         self.addClass(oBtn,'active');
         aCut[0].style.display='none';
         aCut[1].style.display='block';
         timer=true;
         iParentH=obj.parentNode.offsetHeight;
         }
         }
         */
        //以上是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
        for (var i = 0; i < iLen; i++) {
                aTargetTop.push(this.offset(aTarget[i]).y);
                aChildren[i].index = i;
                aChildren[i].onclick = function () {
                        //以下是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
                        /*
                         if(oBtn&&aCut){
                         self.removeClass(oBtn,'active');
                         aCut[0].style.display='block';
                         aCut[1].style.display='none';
                         }
                         iParentH=obj.parentNode.offsetHeight;
                         */
                        ///以上是针对江城美容的列表页进行的特殊处理,其他专题使用时可以选择删除;
                        now = this.index;
                        for (var i = 0; i < iLen; i++) {
                                self.removeClass(aChildren[i], 'active');
                        }
                        self.addClass(aChildren[now], 'active');
                        clearInterval(timer);
                        timer = setInterval(function () {
                                iOldScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                                speed = (aTargetTop[now] - iObjH - iOldScrollTop) / 10;
                                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                                window.scrollTo(0, iOldScrollTop + speed);
                                if (iOldScrollTop == aTargetTop[now] - iObjH) {
                                        clearInterval(timer);
                                        timer = null;
                                }
                        }, 30)
                };
        }
        this.addEvent(window, 'scroll', function () {
                iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                /*if(iScrollTop>=(iObjTop+iParentH)-iObjH+11){//此次判断条件是根据江城美容列表页进行的特殊处理,其他专题可以删除
                 obj.style.position='absolute';
                 obj.style.top=iParentH-iObjH+8+'px';//此次判断条件是根据江城美容列表页进行的特殊处理,其他专题可以删除
                 }else */
                if (iScrollTop >= iObjTop) {
                        obj.style.position = 'fixed';
                        obj.style.top = 0;
                        obj.style.zIndex = 10;
                } else {
                        obj.style.position = 'absolute';
                        obj.style.top = 0;
                }
                if (!timer) {
                        for (var i = 0; i < iLen; i++) {
                                if (iScrollTop >= aTargetTop[i] - iObjH) {
                                        for (var j = 0; j < iLen; j++) {
                                                self.removeClass(aChildren[j], 'active');
                                        }
                                        self.addClass(aChildren[i], 'active');
                                }
                        }
                }
        });
}
Rookie.prototype.iScroll = function () {
        var x = document.documentElement.scrollLeft || document.body.scrollLeft;
        var y = document.documentElement.scrollTop || document.body.scrollTop;
        return {x: x, y: y}
}
Rookie.prototype.iClient = function () {
        var x = document.documentElement.clientWidth;
        var y = document.documentElement.clientHeight;
        return {x: x, y: y}
}
Rookie.prototype.sliderTil = function (json) {
        var aTil = document.querySelectorAll(json.aTil);
        var oParent = document.querySelectorAll(json.oParent)[0];
        var iParentW = oParent.offsetWidth;
        var iLen = aTil.length;
        var iScrollT = this.iScroll().y;
        var iClientT = this.iClient().y;
        var self = this;
        var pos = [];
        this.addEvent(window, 'scroll', function () {
                iScrollT = self.iScroll().y;
                for (var i = 0; i < iLen; i++) {
                        pos.push([self.offset(aTil[i]).y, Math.floor((iParentW - aTil[i].offsetWidth) / 2)]);
                        if (iScrollT + iClientT >= pos[i][0]) {
                                aTil[i].style.left = pos[i][1] + 'px'
                        }
                }
        })
}
Rookie.prototype.addSpan = function (obj) {
        var aTil = document.querySelectorAll(obj);
        var iLen = aTil.length;
        var sSpan = "";
        for (var i = 0; i < iLen; i++) {
                var str = aTil[i].innerHTML;
                var iStrLen = str.length
                aTil[i].innerHTML = "";
                for (var j = 0; j < iStrLen; j++) {
                        sSpan += "<span>" + str.charAt(j) + "</span>";
                }
                aTil[i].innerHTML = sSpan;
                sSpan = "";
        }
}
Rookie.prototype.scrollAddActive = function (obj) {
        var self = this;
        var obj = document.querySelectorAll(obj);
        var iLen = obj.length;
        var iScrollTop = this.iScroll().y;
        var iClentX = this.iClient().y;
        for (var i = 0; i < iLen; i++) {
                iScrollTop + iClentX >= self.offset(obj[i]).y && (self.addClass(obj[i], 'active'));
        }
        this.addEvent(window, 'scroll', function () {
                iScrollTop = self.iScroll().y;
                for (var i = 0; i < iLen; i++) {
                        iScrollTop + iClentX >= self.offset(obj[i]).y && (self.addClass(obj[i], 'active'));
                }
        })
}
Rookie.prototype.f5 = function (fn) {
        this.addEvent(document, 'keydown', function (ev) {
                var ev = ev || event;
                ev.keyCode == 116 && fn && fn();
        })
}
Rookie.prototype.sliderSwitch = function (json) {
        var self = this;
        var json = json || {};
        if (!json.oParent) {
                throw new Error('oParent属性为必填属性,选取元素时请不要选取到了不存在的元素!');
                return;
        }
        var oParent = document.querySelector(json.oParent);
        var opts = {
                oParent: oParent,//父级容器
                aBtn: json.aBtn ? document.querySelectorAll(json.aBtn) : oParent.querySelectorAll('dt'),//按钮
                aCut: json.aCut ? document.querySelectorAll(json.aCut) : oParent.querySelectorAll('ul>li')//切换
        };
        var iParentWidth = opts.oParent.offsetWidth;
        var iBntWidth = opts.aBtn[0].offsetWidth;
        var iCutWidth = opts.aCut[0].offsetWidth;
        var iLen = opts.aBtn.length;
        //console.log(iParentWidth,iBntWidth,iCutWidth,iLen);
        for (var i = 1; i < iLen; i++) {
                opts.aCut[i].style.left = iCutWidth + iBntWidth * (i - 1) + 'px';
        }
        for (var i = 0; i < iLen; i++) {
                opts.aBtn[i].index = i;
                opts.aBtn[i].onmouseover = function () {
                        var now = this.index;
                        for (var i = 0; i < iLen; i++) {
                                if (now < i) {
                                        self.move(opts.aCut[i], {left: iCutWidth + iBntWidth * (i - 1)});
                                } else {
                                        self.move(opts.aCut[i], {left: iBntWidth * i});
                                }
                        }
                }
        }
}
Rookie.prototype.delayImg = function (obj) {
        var self = this;
        if (typeof obj == 'string') {
                var obj = document.querySelectorAll(obj)
        }
        var iLen = obj.length;
        var iClientH = this.iClient().y;
        delay();
        this.addEvent(window, 'scroll', function () {
                setTimeout(delay, 100);
        })
        function delay() {
                var iScrollTop = self.iScroll().y;
                for (var i = 0; i < iLen; i++) {
                        var iObjHeight = self.offset(obj[i]).y;
                        if (iScrollTop + iClientH >= iObjHeight && obj[i].src == '') {
                                self.addClass(obj[i], 'active');
                                obj[i].src = obj[i].getAttribute('_src');
                        }
                }
        }
}