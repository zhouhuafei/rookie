//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
/*blog*/
$(function(){
        /*blog*/
        jQuery("#blog").slide({effect:"fold",autoPlay:true,interTime:3000,startFun:function(index){
                var img=$('#blog .bd').find('img').eq(index);
                var _src=img.attr('_src');
                if(!img.attr('src')){
                        img.attr('src',_src);
                }
        }});
        /*media*/
        (function(doc){
                var oParent=doc.getElementById('media');
                var oDt=oParent.getElementsByTagName('dt')[0];
                var aLi=oParent.getElementsByTagName('li');
                var iLen=aLi.length;
                for(var i=0;i<iLen;i++){
                        aLi[i].onclick=showVideo;
                }
                oDt.onclick=showVideo;
                function showVideo(){
                        var vid=this.title;
                        var src="video.html#"+vid;
                        if(oDt.className!='active'){
                                oDt.className='active';
                        }
                        oDt.innerHTML='<iframe frameborder=0 scrolling=no width=320 height=240 src='+src+'></iframe>';
                }
        })(document);
        /*expert*/
        jQuery("#expert").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,interTime:3000,vis:6});
        /*international*/
        jQuery("#international").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,interTime:3000,vis:3});
        /*communication*/
        jQuery("#communication").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:3000,startFun:function(index){
                var imgAll=$('#communication .bd li').eq(index).find('img');
                imgAll.each(function(index){
                        var img=imgAll.eq(index);
                        var _src=img.attr('_src');
                        if(!img.attr('src')){
                                img.attr('src',_src);
                        }
                });
        }});
});


