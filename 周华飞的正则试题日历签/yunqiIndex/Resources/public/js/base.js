//logo滚动
$(function(){
    new Swiper ('.c_logo_main .swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay:1000,
        slidesPerView:2
    });
});
//banner切换
$(function(){
    new Swiper ('.cj_home_banner .swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onTransitionStart:function(swiper){
            var obj=$('.cj_home_banner .swiper-container').find('a');
            var NextSrc=obj.eq(swiper.activeIndex+1).attr('_style');
            obj.eq(swiper.activeIndex+1).attr('style',NextSrc);
            var prevSrc=obj.eq(swiper.activeIndex-1).attr('_style');
            obj.eq(swiper.activeIndex-1).attr('style',prevSrc);
        }
    });
    function autoMg(){
        var clienW=$(window).width();
        var l=(clienW-1200)/2+248;
        var r=(clienW-1200)/2+110;
        $('.cj_home_banner .swiper-button-prev').css('left',l);
        $('.cj_home_banner .swiper-button-next').css('right',r);
        $('.cj_home_banner .c_login').css('right',(clienW-1200)/2);
    }
    autoMg();
    $(window).resize(autoMg);
});
//登录弹窗
$(function(){
    $("#login_btn").click(function() {
        ShowDialog();
    });
    $("#dialog-close").click(function() {
        hideDialog();
    });
    function ShowDialog() {
        $("#dialog").show();
        $("#dialog_center").show();
    }
    function hideDialog() {
        $("#dialog").hide();
        $("#dialog_center").hide();
    }
});
//返回顶部
$(function(){
    $('.c_right_fix li:last-of-type').click(function(){
        $('html,body').animate({scrollTop:0},400);
    })
});
//图片延迟加载
$(function(){
    $("img.lazy").lazyload({effect : "fadeIn"});
});
//jq版简易切换封装
function easyTabSwitch(opt){
    var aBtn=opt.aBtn;
    var aCut=opt.aCut;
    if(!aBtn||!aCut){
        return false;
    }
    var type=opt.type||'mouseenter';
    var aBtnClass=opt.aBtnClass||'on';
    var bTrue=opt.bTrue||false;
    var fn=opt.fn;
    aBtn.on(type,function(){
        $(this).addClass(aBtnClass).siblings().removeClass(aBtnClass);
        if(bTrue){
            aCut.eq($(this).index()).addClass(aBtnClass).siblings().removeClass(aBtnClass);
        }else{
            aCut.eq($(this).index()).fadeIn().siblings().fadeOut();
        }
        fn&&fn($(this).index());
    });
}
//以前封装的粘性插件
(function($){
    $.fn.rFixed=function(opts){
        return this.each(function(index){
            var $this=$(this);
            if(opts){
                if($.type(opts)=='boolean'){
                    oParent=$this.parent();
                }else{
                    oParent=$(opts).eq(index);
                }
                var iParentHeight=oParent.outerHeight();
                var iParentTop=oParent.offset().top;
                var iHeight=$this.outerHeight();
                var iParentBorderWidth=parseInt(oParent.css('border-top-width'));
            }
            var iScrollTop=$(document).scrollTop();
            var iTop=$this.offset().top;
            var iTopDefault=$this.position().top;
            var iLeft=$this.offset().left;
            var iLeftDefault=$this.position().left;
            $(window).scroll(function(){
                iScrollTop=$(document).scrollTop();
                if(opts){
                    if(iScrollTop>=iParentHeight+iParentTop-iHeight-iParentBorderWidth){
                        $this.css({position:'absolute',top:iParentHeight-iHeight-iParentBorderWidth*2,left:iLeftDefault});
                    }else if(iScrollTop>=iTop){
                        $this.css({position:'fixed',top:0,left:iLeft});
                    }
                    else{
                        $this.css({position:'absolute',top:iTopDefault,left:iLeftDefault});
                    }
                }else{
                    if(iScrollTop>=iTop){
                        $this.css({position:'fixed',top:'0',left:iLeft});
                    }else{
                        $this.css({position:'absolute',top:iTopDefault,left:iLeftDefault});
                    }
                }
            });
        });
    };
})(jQuery);
//以前封装的导航插件
(function($){
    $.fn.rFlowNav=function(opts){
        return this.each(function(){
            var $this=$(this);
            var defaults={
                aBtn:'li',
                sTarget:'target',
                sClass:'active',
                iHeight:$(this).outerHeight()
            };
            var arr=[];
            var settings=$.extend(defaults,opts);
            var aBtn=$(this).find(settings.aBtn);
            var iTop=$(window).scrollTop();
            var onOff=true;
            $('.'+settings.sTarget).each(function(index){arr[index]=$(this).offset().top;});
            aBtn.click(function(){
                onOff=false;
                var index=$(this).index('.'+$this.attr('class')+' li');
                $(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);
                $('html,body').animate({scrollTop:arr[index]-settings.iHeight},function(){onOff=true;});
            });
            aBtn.each(function(index){iTop>=arr[index]-settings.iHeight&&$(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);});
            $(window).scroll(function(){
                iTop=$(window).scrollTop();
                if(!onOff)return;
                aBtn.each(function(index){iTop>=arr[index]-settings.iHeight&&$(this).addClass(settings.sClass).siblings().removeClass(settings.sClass);});
            });
        });
    };
})(jQuery);