//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(function(){
        /*dynamic-hot*/
        jQuery(".dynamic-hot").slide({effect:"leftLoop",autoPlay:true,interTime:3000});
        /*video*/
        $('.video').click(function(){
                var self=$(this);
                var w=self.width();
                var h=self.height();
                var vid=self.attr('data-vid');
                self.html('<iframe frameborder=0 scrolling=no width='+w+' height='+h+' src=video.html#'+vid+'></iframe>');
        });
        /*dynamic-bar*/
        jQuery(".dynamic-bar").slide({effect:"leftLoop",autoPlay:true,interTime:3000});
        /*communication-bar*/
        jQuery(".communication-bar").slide({effect:"leftLoop",autoPlay:true,interTime:3000});
        /*communication-main*/
        jQuery(".communication-main").slide({effect:"fold",autoPlay:true,interTime:3000});
        /*expert*/
        $('#expert').find('dl').click(function(){$(this).addClass('on').siblings().removeClass('on');});
        /*interlocution-bar*/
        jQuery(".interlocution-bar").slide({effect:"leftLoop",autoPlay:true,interTime:3000});
        /*hospital*/
        jQuery("#hospital").slide({effect:"fold",autoPlay:true,interTime:3000});
});