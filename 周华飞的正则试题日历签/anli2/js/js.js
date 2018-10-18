//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(window).load(function () {
        var Game = {
                //初始化
                fnInit: function () {
                        this.fnEle();//调用获取元素
                        this.fnWaterFall();//调用案例布局之瀑布流
                        this.fnSideBtnClick();//调用左侧导航列表添加点击事件
                        this.fnVideoBtnClick();//调用给视频列表添加点击事件
                        this.fnFlowNav();//调用粘性侧边栏
                        this.fnDelay();//调用延迟加载
                },
                //获取元素
                fnEle: function () {
                        this.oMain = document.getElementById('main');//整体容器
                        this.oSide = document.getElementById('side');//左侧导航模块
                        this.aSideBtn = this.oSide.getElementsByTagName('li');//左侧导航列表
                        this.oSection = document.getElementById('section');//右侧案例模块
                        this.aAllLi = this.oSection.getElementsByTagName('li');//所有的右侧列表
                        this.oVideo = document.getElementById('video');//右侧视频模块
                        this.aVideoBtn = this.oVideo.getElementsByTagName('li');//右侧视频列表
                        this.oCase = document.getElementById('case');//右侧案例模块
                        this.aCaseBtn = this.oCase.getElementsByTagName('li');//右侧案例列表
                        this.firstRowNum = 4;//第一排案例的个数
                        this.iOneWidth = this.aCaseBtn[0].offsetWidth;//一个案例列表的宽度
                        this.firstRowArr = [];//第一排的高度数据
                        this.minValue = null;//数组中的最小值
                        this.minIndex = null;//数组中最小值的位置
                        this.oShadow = document.getElementById('box');//遮罩层
                        this.oVideoPupup = document.getElementById('boxs');//视频弹层
                        this.oClose = this.oVideoPupup.getElementsByTagName('em')[0];//关闭按钮
                        this.oVideoContent = this.oVideoPupup.getElementsByTagName('span')[0];//视频承载的地方
                        this.iClientH = document.documentElement.clientHeight;//可视区高度
                },
                //案例布局之瀑布流
                fnWaterFall: function () {
                        //获取第一排的高度并填充到数组中
                        for (var i = 0; i < this.firstRowNum; i++) {
                                this.firstRowArr[i] = this.aCaseBtn[i].offsetHeight;
                        }
                        //布局转换
                        for (var j = this.firstRowNum; j < this.aCaseBtn.length; j++) {
                                if (this.aCaseBtn[j].className == '') {//性能优化
                                        this.aCaseBtn[j].style.position = 'absolute';
                                        this.fnMin();//调用求最小值,以及最小值的位置
                                        this.aCaseBtn[j].style.top = this.minValue + 'px';
                                        this.aCaseBtn[j].style.left = this.iOneWidth * this.minIndex + 'px';
                                        //重置数组中的最小值
                                        this.firstRowArr[this.minIndex] = this.firstRowArr[this.minIndex] + this.aCaseBtn[j].offsetHeight;
                                }
                        }
                        this.fnResetHeight();//调用重置右侧案例模块的高度
                        //console.log(this.firstRowArr, this.minValue, this.minIndex);
                },
                //求最小值,以及最小值的位置
                fnMin: function () {
                        this.minValue = Math.min.apply(Math, this.firstRowArr);//求数组中的最小值
                        this.minIndex = 0;//求数组中最小值的位置
                        for (var i = 0; i < this.firstRowArr.length; i++) {
                                if (this.minValue == this.firstRowArr[i]) {
                                        this.minIndex = i;
                                        break;
                                }
                        }
                },
                //重置右侧案例模块的高度
                fnResetHeight: function () {
                        for (var i = 0; i < this.aSideBtn.length; i++) {
                                //点击视频案例时高度重置
                                if (this.aSideBtn[i].getAttribute('data-title') == 'spal' && this.aSideBtn[i].className == 'active') {
                                        this.oCase.style.height = 0;
                                } else {//点击非视频案例时高度重置
                                        this.oCase.style.height = Math.max.apply(Math, this.firstRowArr) + 'px';
                                }
                        }
                },
                //左侧导航列表添加点击事件
                fnSideBtnClick: function () {
                        var self = this;
                        for (var i = 0; i < this.aSideBtn.length; i++) {
                                this.aSideBtn[i].onclick = function () {
                                        self.fnShow(this);//调用显示隐藏
                                        self.fnFlowNav();//调用粘性侧边栏
                                        self.fnScrollTop();//回到固定高度
                                        self.fnDelay();//调用延迟加载
                                }
                        }
                },
                //回到固定高度
                fnScrollTop: function () {
                        window.scrollTo(0, this.oMain.offsetTop - 55);
                },
                //显示隐藏
                fnShow: function (obj) {
                        //按钮颜色调整
                        for (var i = 0; i < this.aSideBtn.length; i++) {
                                this.aSideBtn[i].className = '';
                        }
                        obj.className = 'active';
                        //列表筛选
                        for (var j = 0; j < this.aAllLi.length; j++) {
                                if (obj.getAttribute('data-title') == 'qbal') {//点击全部案例
                                        this.aAllLi[j].className = '';
                                } else if (obj.getAttribute('data-title') == 'spal') {//点击视频列表
                                        this.aAllLi[j].className = 'active';
                                } else {//点击案例列表
                                        if (this.aAllLi[j].getAttribute('data-title') == obj.getAttribute('data-title')) {
                                                if (this.aAllLi[j].getAttribute('data-title') == 'spal') {
                                                        this.aAllLi[j].className = 'active';
                                                } else {
                                                        this.aAllLi[j].className = '';
                                                }
                                        } else {
                                                if (this.aAllLi[j].getAttribute('data-title') == 'spal') {
                                                        this.aAllLi[j].className = '';
                                                } else {
                                                        this.aAllLi[j].className = 'active';
                                                }
                                        }
                                }
                        }
                        this.fnWaterFall();//案例布局之瀑布流
                },
                //给视频列表添加点击事件
                fnVideoBtnClick: function () {
                        var self = this;
                        for (var i = 0; i < this.aVideoBtn.length; i++) {
                                this.aVideoBtn[i].onclick = function () {
                                        self.oShadow.className = 'active';
                                        self.oVideoPupup.className = 'active';
                                        var vid = this.getAttribute('data-vid');
                                        self.oVideoContent.innerHTML = '<iframe src="video.html#' + vid + '" scrolling=0 frameborder=0 width=500 height=420></iframe>';
                                }
                        }
                        this.oClose.onclick = function () {
                                self.oShadow.className = '';
                                self.oVideoPupup.className = '';
                                self.oVideoContent.innerHTML = '';
                        }
                },
                //粘性侧边栏
                fnFlowNav: function () {
                        var self = this;
                        var iT = this.oMain.offsetTop;
                        var iSrollT = document.documentElement.scrollTop || document.body.scrollTop;
                        function scroll() {
                                iSrollT = document.documentElement.scrollTop || document.body.scrollTop;
                                if (iSrollT >= iT) {
                                        if (self.oSide.offsetHeight + iSrollT - iT >= self.oMain.offsetHeight) {
                                                self.oMain.style.minHeight = self.oSide.offsetHeight + 'px';
                                                self.oSide.className = 'active2 fl';
                                        } else {
                                                self.oMain.style.minHeight = self.oSide.offsetHeight + 'px';
                                                self.oSide.className = 'active fl';
                                        }
                                } else {
                                        self.oSide.className = 'fl';
                                }
                        }
                        scroll();
                        this.fnAddEvent(window, 'scroll', scroll);
                },
                //事件绑定封装
                fnAddEvent: function (obj, ev, fn) {
                        if (obj.attachEvent) {
                                obj.attachEvent('on' + ev, fn);
                        } else {
                                obj.addEventListener(ev, fn, false);
                        }
                },
                //延迟加载
                fnDelay: function () {
                        var self = this;
                        var bTrue = true;//性能优化
                        function delay() {
                                var iSrollT = document.documentElement.scrollTop || document.body.scrollTop;
                                for (var i = 0; i < self.aAllLi.length; i++) {
                                        //视频延迟加载
                                        if (self.aAllLi[i].getAttribute('data-title') == 'spal' && self.aAllLi[i].className == 'active') {
                                                if (iSrollT + self.iClientH >= self.aAllLi[i].offsetTop) {
                                                        var imgVideo = self.aAllLi[i].getElementsByTagName('img')[0];
                                                        if (!imgVideo.src) {//性能优化
                                                                imgVideo.src = imgVideo.getAttribute('_src');
                                                        }
                                                }
                                                //案例延迟加载
                                        } else if (self.aAllLi[i].getAttribute('data-title') != 'spal' && self.aAllLi[i].className == '') {
                                                if (iSrollT + self.iClientH >= self.aAllLi[i].offsetTop) {
                                                        var imgCaseBig = self.aAllLi[i].getElementsByTagName('img')[0];
                                                        var imgCaseSmall = self.aAllLi[i].getElementsByTagName('img')[1];
                                                        if (!imgCaseBig.src) {//性能优化
                                                                imgCaseBig.src = imgCaseBig.getAttribute('_src');
                                                        }
                                                        if (!imgCaseSmall.src) {//性能优化
                                                                imgCaseSmall.src = imgCaseSmall.getAttribute('_src');
                                                        }
                                                        if (bTrue) {
                                                                bTrue = false;
                                                                setTimeout(function () {//性能优化
                                                                        var oImgLast = self.aAllLi[self.aAllLi.length - 1].getElementsByTagName('img')[1];
                                                                        self.fnWaterFall();
                                                                        if (oImgLast.src == '') {//性能优化
                                                                                bTrue = true;
                                                                        }
                                                                }, 200);
                                                        }
                                                }
                                        }
                                }
                        }
                        delay();
                        this.fnAddEvent(window, 'scroll', delay);
                }
        };
        Game.fnInit();
});
