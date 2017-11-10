//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(function () {
        TouchSlide({slideCell: "#show"});
        $('.video').click(function () {
                var w = $(this).width();
                var h = $(this).height();
                $(this).html('<iframe src="video.html" width=' + w + ' height=' + h + ' frameborder=0 scrolling=no></iframe>');
        })
});