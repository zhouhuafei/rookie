//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
/*fullpage*/
$(function () {
        $('#dowebok').fullpage({
                'verticalCentered': false,//内容是否垂直居中
                'css3': true,//是否使用 CSS3 transforms 滚动
                'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684', '#254875', '#00FF00', '#254587'],//section背景色
                'anchors': ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],//人家建议要带上这个啦,那就带上呗
                'navigation': true,//项目导航
                'navigationPosition': 'left',//项目位置
                'navigationTooltips': ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7']//项目提示
                //'slidesNavigation':true,//左右滑块的项目导航
                //'loopHorizontal':true,//左右滑块是否循环滚动(默认为true)航
                //'continuousVertical':true//是否循环滚动
        });
        setInterval(function () {
                //$.fn.fullpage.moveSlideRight();//左右滑块是否自动滚动
                //$.fn.fullpage.moveSectionDown();//是否自动滚动
        }, 10000);
});
/*SuperSlide*/
$(window).load(function () {
        jQuery(".twos").slide({
                mainCell: ".bd",
                interTime: 2000,
                autoPage: true,
                effect: "topLoop",
                autoPlay: true,
                vis: 3
        });
});
/*video*/
$(function () {
        $('.video').click(function () {
                $(this).html('<iframe src="video.html" width=420 height=315 frameborder=0 scrolling=no></iframe>')
        })
});