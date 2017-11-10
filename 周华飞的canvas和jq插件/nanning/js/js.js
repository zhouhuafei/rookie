/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(function () {
        jQuery("#banner").slide({mainCell: "ul", titCell: "ol li", effect: "fold", autoPlay: true});
        jQuery("#picBox_top").slide({effect: "topLoop", autoPlay: true});
        jQuery(".zjtd").slide({
                titCell: ".hd ul",
                mainCell: ".bd div",
                autoPage: true,
                effect: "leftLoop",
                autoPlay: true,
                vis: 4
        });
        jQuery("#case").slide({effect: "fold", autoPlay: true});
        jQuery(".dbdh").slide({effect: "fold", autoPlay: true, interTime: 6000});
        /*监督单位和医院环境*/
        jQuery(".iBox4").slide({mainCell: ".iBox4_2", titCell: ".iBox4_1 ul li", effect: "fold", autoPlay: true});
        jQuery(".iBox4_2").slide({
                mainCell: "ul#a1 div",
                autoPlay: true,
                effect: "leftMarquee",
                vis: 6,
                interTime: 50,
                trigger: "click"
        });
        jQuery(".iBox4_2").slide({
                mainCell: "ul#a2 div",
                autoPlay: true,
                effect: "leftMarquee",
                vis: 6,
                interTime: 50,
                trigger: "click"
        });
        jQuery(".iBox4_2").slide({
                mainCell: "ul#a3 div",
                autoPlay: true,
                effect: "leftMarquee",
                vis: 6,
                interTime: 50,
                trigger: "click"
        });
});