//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(window).load(function () {
        jQuery("#expert").slide({effect: 'leftLoop'});
        jQuery("#equipment").slide({effect: 'fold'});
        jQuery("#about").slide({mainCell: ".bd ul", autoPage: true, effect: "leftLoop", autoPlay: true, vis: 3});
});