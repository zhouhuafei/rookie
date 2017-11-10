(function(win,doc){
        if(win!=win.top){
               return false;
        }
        var mousemoveTrue=false;//是否开启鼠标移动事件的记录(可以记录也可以通过视图演示)
        var scrollmoveTrue=false;//是否开启滚动条滚动事件的记录(可以记录但不能通过视图进行演示)
        var keycodeTrue=false;//是否开启键盘事件的记录(可以记录但不能通过视图进行演示)
        var loadTrue=false;//是否开启页面载入记录(可以记录但不能通过视图进行演示)
        //滚动条获取
        function scroll(){
                var top=doc.documentElement.scrollTop||doc.body.scrollTop;
                var left=doc.documentElement.scrollLeft||doc.body.scrollLeft;
                return {
                        top:top,
                        left:left
                }
        }
        var customName='behovior';//用户名(此处应该有个唯一标识符)
        var customInfo=localStorage[customName]?JSON.parse(localStorage[customName]):[];//用户信息
        //页面载入记录
        if(loadTrue){
                customInfo.push({
                        time:new Date().getTime(),
                        href:location.href,
                        referrer:doc.referrer,
                        plat:navigator.platform,
                        navigator:navigator.userAgent,
                        clientW:doc.documentElement.clientWidth,
                        clientH:doc.documentElement.clientHeight
                });
                localStorage[customName]=JSON.stringify(customInfo);
        }
        //鼠标移动记录
        if(mousemoveTrue){
                var moveTrue=true;//鼠标移动间隔记录开关
                var moveInterval=2000;//记录间隔(我觉得没必要持续记录,所以进行间隔纪录)
                doc.addEventListener('mousemove',function(ev){
                        if(moveTrue){
                                moveTrue=false;
                                setTimeout(function(){
                                        docEvent(ev);
                                        moveTrue=true;
                                },moveInterval);
                        }
                },false);
        }
        //鼠标点击记录
        doc.addEventListener('click',docEvent,false);
        //docEvent事件信息函数
        function docEvent(ev){
                customInfo.push({
                        time:new Date().getTime(),
                        href:location.href,
                        referrer:doc.referrer,
                        eventType:ev.type,
                        targetTagName:ev.target.tagName.toLowerCase(),
                        targetClassName:ev.target.className,
                        targetID:ev.target.id,
                        scrollX:scroll().left,
                        scrollY:scroll().top,
                        clientW:doc.documentElement.clientWidth,
                        clientH:doc.documentElement.clientHeight,
                        clientX:ev.clientX,
                        clientY:ev.clientY,
                        pageX:scroll().left+ev.clientX,
                        pageY:scroll().top+ev.clientY
                });
                localStorage[customName]=JSON.stringify(customInfo);
        }
        //页面滚动条记录
        if(scrollmoveTrue){
                var scrollTrue=true;//滚动条移动间隔记录开关
                var scrollInterval=2000;//记录间隔(我觉得没必要持续记录,所以进行间隔纪录)
                win.addEventListener('scroll',function(ev){
                        if(scrollTrue){
                                scrollTrue=false;
                                setTimeout(function(){
                                        customInfo.push({
                                                time:new Date().getTime(),
                                                href:location.href,
                                                type:ev.type,
                                                clientW:doc.documentElement.clientWidth,
                                                clientH:doc.documentElement.clientHeight,
                                                scrollX:scroll().left,
                                                scrollY:scroll().top
                                        });
                                        localStorage[customName]=JSON.stringify(customInfo);
                                        scrollTrue=true;
                                },scrollInterval);
                        }
                },false);
        }
        //键盘事件记录
        if(keycodeTrue){
                doc.addEventListener('keyup',function(ev){
                        customInfo.push({
                                time:new Date().getTime(),
                                href:location.href,
                                type:ev.type,
                                keyCode:ev.keyCode,
                                clientW:doc.documentElement.clientWidth,
                                clientH:doc.documentElement.clientHeight,
                                scrollX:scroll().left,
                                scrollY:scroll().top
                        });
                        localStorage[customName]=JSON.stringify(customInfo);
                },false);
        }
        //关闭页面到时候进行数据提交
        window.onbeforeunload=function(){
                //ajax提交,每个用户应该有唯一标识符,如果有标识符号,则进行信息的累积就不是问题
                //通过信息的名称记录数据,例如把用户分别记录在behavior0,behavior1,behavior2,behavior3的数组中,
                /*
                var ajax=new XMLHttpRequest();
                console.log('behavior='+localStorage[customName]);
                ajax.open('post','',false);//此处要同步才可以(重要)
                ajax.send('behavior='+localStorage[customName]);
                */
                //把数据提交到服务器并清空本地
                //localStorage[customName]='';
        };
        //存在问题:电脑的分辨率不同,应该怎么处理?
        //解决思路:用iframe,设定iframe宽高为用户信息中的clientW,clientH,然后再继续其他操作,因为要帮助徒弟工作,所以暂时就先这样吧
})(window,document);