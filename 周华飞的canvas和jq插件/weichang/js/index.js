//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
seajs.use(['jquery-1.7.2.min.js', 'jquery.SuperSlide.2.1.1.js'], function () {
        /*banner*/
        jQuery("#banner").slide({mainCell: ".bd", effect: "fold", autoPlay: true});
        /*nav*/
        function fnHover(obj) {
                $(obj).mouseover(function () {
                        $(this).addClass('on').siblings().removeClass('on');
                })
        }

        fnHover('#nav dl');
        /*effect*/
        fnHover('.effect-text-left li');
        jQuery("#effect").slide({mainCell: ".bd", effect: "left", autoPlay: true});
        /*expert*/
        jQuery("#expert").slide({mainCell: ".bd ul", effect: "left", autoPlay: true});
        /*expert*/
        jQuery("#therapy").slide({mainCell: ".bd", effect: "fold", autoPlay: true});
        /*environment*/
        jQuery("#environment").slide({mainCell: ".bd", effect: "left", autoPlay: true});
});





