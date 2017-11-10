//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
// 安全体系
$(window).load(function(){
        $(".iBox8_1_1 h3").hide();
        $(".iBox8_1_1 h3").eq(0).show();
        $(".iBox8_1_1 p").hide();
        $(".iBox8_1_1 p").eq(0).show();
        $(".iBox8_1_3 li").eq(0).addClass("active");
        $(".iBox8_1_2 li").eq(0).addClass("active");
        $(".iBox8_1_3 li").each(function(i){
                $(this).mouseover(function(){
                        $(".iBox8_1_3 li").removeClass("active");
                        $(".iBox8_1_3 li").eq(i).addClass("active");
                        $(".iBox8_1_2 li").removeClass("active");
                        $(".iBox8_1_2 li").css("zIndex",1);
                        $(".iBox8_1_2 li").eq(i).css("zIndex",2);
                        $(".iBox8_1_2 li").eq(i).addClass("active");
                        $(".iBox8_1_1 h3").hide();
                        $(".iBox8_1_1 h3").eq(i).show();
                        $(".iBox8_1_1 p").hide();
                        $(".iBox8_1_1 p").eq(i).show();
                })
        });
        jQuery(".about_box").slide({mainCell:".bd",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
});
