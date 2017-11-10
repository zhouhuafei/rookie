//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
var Game = null;
//创建构造函数
(function () {
        Game = function (json) {
                this.json = json || {};//json
                this.oParent = this.json.oParent || 'main';//视频列表容器(默认为main)
                this.aBtn = this.json.aBtn || 'div';//视频列表(默认为div)
                this.oShadow = this.json.oShadow || 'box';//遮罩(默认为box)
                this.oPopup = this.json.oPopup || 'popup';//弹窗容器(默认为popup)
                this.oClose = this.json.oClose || 'em';//弹窗关闭按钮(默认为em)
                this.oVideo = this.json.oVideo || 'span';//视频盒子(默认为span)
                this.oNav = this.json.oNav || 'nav';//导航盒子(默认为nav)
                this.oNavFlow= this.json.oNavFlow || 'ul';//粘性导航(默认为div)
                this.aNavBtn = this.json.aNavBtn || 'li';//导航按钮(默认为li)
                this.fnInit();//初始化
        };
        Game.prototype = {//修正构造函数的指向
                constructor: Game,
                //初始化
                fnInit: function () {
                        this.fnEle();//获取元素
                        this.fnaNavBtn();//给导航添加点击事件
                        this.fnHideLast();//加载判定
                        this.fnaBtnClick();//给视频列表添加点击事件
                        this.fnoCloseClick();//给关闭按钮添加事件
                        this.fnDelayLoad();//图片延迟加载
                        this.fnFlowNav();//粘性导航
                },
                //获取元素
                fnEle: function () {
                        this.oParent = document.getElementById(this.oParent);//视频列表容器
                        this.aBtn = this.oParent.getElementsByTagName(this.aBtn);//视频列表
                        this.iLen = this.aBtn.length;//视频列表长度
                        this.oShadow = document.getElementById(this.oShadow);//遮罩
                        this.oPopup = document.getElementById(this.oPopup);//弹窗容器
                        this.oClose = this.oPopup.getElementsByTagName(this.oClose)[0];//弹窗关闭按钮
                        this.oVideo = this.oPopup.getElementsByTagName(this.oVideo)[0];//视频盒子
                        this.oNav=document.getElementById(this.oNav);//导航盒子
                        this.oNavFlow=this.oNav.getElementsByTagName(this.oNavFlow)[0];//粘性导航
                        this.aNavBtn =this.oNav.getElementsByTagName(this.aNavBtn);//导航按钮
                },
                //加载判定
                fnHideLast:function(){
                        var self=this;
                        for(var j=0;j<self.iLen;j++){
                                if(self.aBtn[j].parentNode.getAttribute('data-modular')!=self.aNavBtn.length-1){
                                        self.aBtn[j].parentNode.style.display='block';
                                }else{
                                        self.aBtn[j].parentNode.style.display='none';
                                }
                        }
                },
                //给视频列表添加点击事件
                fnaBtnClick: function () {
                        var self = this;
                        for (var i = 0; i < this.iLen; i++) {
                                this.aBtn[i].onclick = function () {
                                        self.fnShow(this);//显示弹窗
                                }
                        }
                },
                //给导航按钮加点击事件
                fnaNavBtn:function(){
                        var self=this;
                        for(var i=0;i<this.aNavBtn.length;i++){
                                this.aNavBtn[i].index=i;
                                this.aNavBtn[i].onclick=function(){
                                        for(var i=0;i<self.aNavBtn.length;i++){
                                                self.aNavBtn[i].className='';
                                        }
                                        this.className='active';
                                        for(var j=0;j<self.iLen;j++){
                                                if(this.index==0){
                                                        if(self.aBtn[j].parentNode.getAttribute('data-modular')!=self.aNavBtn.length-1){
                                                                self.aBtn[j].parentNode.style.display='block';
                                                        }else{
                                                                self.aBtn[j].parentNode.style.display='none';
                                                        }
                                                }else{
                                                        if(self.aBtn[j].parentNode.getAttribute('data-modular')==this.index){
                                                                self.aBtn[j].parentNode.style.display='block';
                                                        }else{
                                                                self.aBtn[j].parentNode.style.display='none';
                                                        }
                                                }
                                        }
                                        self.scroll();//图片延迟加载分支函数
                                }
                        }
                },
                //给关闭按钮添加事件
                fnoCloseClick: function () {
                        var self = this;
                        this.oClose.onclick = function () {
                                self.fnHide();//隐藏弹窗
                        }
                },
                //显示弹窗
                fnShow: function (aBtn) {
                        if(aBtn.parentNode.getAttribute('data-modular')==this.aNavBtn.length-1){return false;}
                        this.oShadow.className = 'active';
                        this.oPopup.className = 'active';
                        var vid = aBtn.parentNode.getAttribute('data-vid');
                        this.oVideo.innerHTML = '<iframe src=video.html#' + vid + ' width=500 height=420 scrolling=no frameborder=no></iframe>';
                },
                //隐藏弹窗
                fnHide: function () {
                        this.oShadow.className = '';
                        this.oPopup.className = '';
                        this.oVideo.innerHTML = '';
                },
                //获取top封装
                fnOffsetTop: function (obj) {
                        var top = 0;
                        while (obj) {
                                if (obj) {
                                        top += obj.offsetTop;
                                        obj = obj.offsetParent;
                                }
                        }
                        return top;
                },
                //事件绑定封装
                fnAddEvent: function (obj, type, fn) {
                        if (obj.attachEvent) {
                                obj.attachEvent('on' + type, function () {
                                        fn.call(obj);
                                });
                        } else {
                                obj.addEventListener(type, fn, false);
                        }
                },
                //图片延迟加载
                fnDelayLoad: function () {
                        var self = this;
                        var iClientH = document.documentElement.clientHeight;
                        this.scroll=function() {
                                var iScroll = document.documentElement.scrollTop||document.body.scrollTop;
                                for (var i = 0; i < self.iLen; i++) {
                                        var iTop = self.fnOffsetTop(self.aBtn[i]);
                                        if (iScroll + iClientH >= iTop) {
                                                self.aBtn[i].children[0].className = 'active';
                                                self.aBtn[i].children[0].src = self.aBtn[i].children[0].getAttribute('data-src');
                                        }
                                }
                        };
                        this.scroll();//图片延迟加载分支函数
                        this.fnAddEvent(window, 'scroll', this.scroll);//图片延迟加载分支函数
                },
                //粘性导航
                fnFlowNav:function(){
                        var self=this;
                        var iTop = self.fnOffsetTop(self.oNavFlow);
                        this.fnAddEvent(window,'scroll',function(){
                                var iScroll = document.documentElement.scrollTop||document.body.scrollTop;
                                if (iScroll>= iTop) {
                                        self.oNavFlow.className='active';
                                }else{
                                        self.oNavFlow.className='';
                                }
                        })
                }
        }
})();
//调用构造函数
(function () {
        new Game();
})();