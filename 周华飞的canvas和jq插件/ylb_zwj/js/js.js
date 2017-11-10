//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(window).load(function () {
        jQuery("#contrast").slide({effect: 'fold'});
        jQuery("#expert").slide({effect: 'leftLoop'});
        jQuery("#equipment").slide({effect: 'fold'});
        jQuery("#resource").slide({effect: 'fold'});
        jQuery("#about").slide({mainCell: ".bd ul", autoPage: true, effect: "leftLoop", autoPlay: true, vis: 3});
        $(function () {
                var aBtn = $('.video');
                aBtn.click(function () {
                        var vid = this.getAttribute('data-vid');
                        $(this).html('<iframe frameborder="0" scrolling="no" width="320" height="240" src="video.html#' + vid + '"></iframe>');
                })
        })
});