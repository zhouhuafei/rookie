/**
 * Created by wangtengteng on 2015/11/16.
 */
$(function(){
    var timer =null;
    //图片延迟加载
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    $('.navMenu li').hover(function(){
        $(this).children('div.menuSide').stop().animate({
            height:'340px',
            opacity:1
        },500);
        $(this).children('a.icon-menu').addClass('tabon');
    },function(){
        $(this).children('div.menuSide').stop().animate({
            height:'0px',
            opacity:1
        },500);
        $(this).children('a.icon-menu').removeClass('tabon');
    });
    //返回顶部
    $('.flexBox li a.return').click(function(event) {
        $('html,body').animate({scrollTop:0},1000);
    });


//页面滚动头部添加阴影效果
    


    //漂浮控件
    $(window).scroll(function(event) {
        var dis=$(window).scrollTop();//获取到网页滚动坐标值；
        //不成文的规则：一定是从大到小判断 -- 因为大于第一层的纵坐标的人有2/3/4/5...
        if(dis>=2050){
            $('.flexBox li').eq(6).addClass('current').siblings().removeClass('current');
        }else if(dis>=1750){
            $('.flexBox li').eq(5).addClass('current').siblings().removeClass('current');
        }else if(dis>=1450){
            $('.flexBox li').eq(4).addClass('current').siblings().removeClass('current');
        }else if(dis>=1150){
            $('.flexBox li').eq(3).addClass('current').siblings().removeClass('current');
        }else if(dis>=850){
            $('.flexBox li').eq(2).addClass('current').siblings().removeClass('current');
        }else if(dis>=550){
            $('.flexBox li').eq(1).addClass('current').siblings().removeClass('current');
        }else if(dis>=250){
            $('.flexBox li').eq(0).addClass('current').siblings().removeClass('current');
        }
    });
    //云起官网移动版二维码
    $('a.cloudM').hover(function(){
        $(this).children('div.cloudErm').stop().animate({
            height:'147px',
            opacity:1
        })
    },function(){
        $(this).children('div.cloudErm').stop().animate({
            height:0,
            opacity:0
        });
    });

    //浮动弹出二维码
    $('.flexBox li.ermdy').hover(function(){
        $(this).children('div.ermdybox').stop().fadeIn();
    },function(){
        $(this).children('div.ermdybox').stop().fadeOut('fast');
    })




    //全民分销
    $('.qmscrollList li:nth-child(4n)').css('margin-right',0)
    var page = 1;
    var i = 4; //每版放4个图片
    


    //云起erp小图
    $li1 = $("div.scroll-yq ul li");
    $window1 = $("div.scroll-yq ul");
    $left1 = $("span.aleft");
    $right1 = $("span.aright");
    $window1.css("width", $li1.length*238);
    var lc1 = 0;
    var rc1 = $li1.length-4;
    $left1.click(function(){
        if (lc1 <1) {
            return;
        }
        lc1--;
        rc1++;
        $window1.animate({left:'+=238px'}, 1000);
    });

    $right1.click(function(){
        if (rc1 < 1){
            return;
        }
        lc1++;
        rc1--;
        $window1.animate({left:'-=238px'}, 1000);
    });

    //erp
    $('.faqBox li:nth-child(2)').css({
        margin:'0px 227px'
    });

   
})


