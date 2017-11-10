//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(function(){
        /*article-tab*/
        jQuery(".article-tab").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:3000,startFun:function(index){
                var img=$('.article-tab .bd').find('img').eq(index);
                var _src=img.attr('_src');
                if(!img.attr('src')){
                        img.attr('src',_src);
                }
        }});
});