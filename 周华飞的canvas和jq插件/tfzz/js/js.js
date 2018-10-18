//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
/*banner*/
jQuery("#banner").slide({effect:'fold'});
/*technology*/
jQuery(".technology").slide();
/*patient*/
$(function () {
        var aCut=$('.patient .bd li div');
        var iLen=aCut.length;
        var pageNum=6;//一页显示的个数
        var allPage=Math.ceil(iLen/pageNum);//应该有多少页
        var pageIndex=0;//当前页的页码
        var pageMax=0;//最大值
        aCut.hide();
        for(var i=pageIndex*pageNum;i<pageIndex*pageNum+pageNum;i++){
                aCut.eq(i).show();
        }
        for(var j=0;j<allPage;j++){
                if(j==pageIndex){
                        $('.patient .hd ul').append($('<li class="on">'+(j+1)+'</li>'));
                }else{
                        $('.patient .hd ul').append($('<li>'+(j+1)+'</li>'));
                }
        }
        var aBtn=$('.patient .hd li');
        $('.patient .hd li').click(function () {
                aBtn.removeClass('on');
                $(this).addClass('on');
                aCut.hide();
                pageIndex=$(this).index();
                pageMax=pageIndex*pageNum+pageNum;
                if(pageMax>iLen){pageMax=iLen;}
                for(var i=pageIndex*pageNum;i<pageMax;i++){
                        aCut.eq(i).show();
                }
                $('html,body').animate({scrollTop: $('.patient ').offset().top});
        })
});
/*safe*/
(function(){
        var oParent=document.getElementById('safe');
        var oBtn1=oParent.getElementsByTagName('ol')[0];
        var aBtn1=oBtn1.getElementsByTagName('li');
        var oBtn2=oParent.getElementsByTagName('ol')[1];
        var aBtn2=oBtn2.getElementsByTagName('li');
        var oCut=oParent.getElementsByTagName('ul')[0];
        var aCut=oCut.getElementsByTagName('li');
        var now=0;
        var nowIndex=aCut.length;
        function tab(){
                for(var i=0;i<aCut.length;i++){
                        aBtn1[i].className='';
                        aBtn2[i].className='';
                        aCut[i].className='';
                }
                aBtn1[now].className='on';
                aBtn2[now].className='on';
                aCut[now].style.zIndex=nowIndex;
                aCut[now].className='on';
        }
        for(var i=0;i<aCut.length;i++){
                aBtn1[i].index=i;
                aBtn2[i].index=i;
                aCut[i].style.zIndex=aCut.length-i;
                aBtn1[i].onclick=function(){
                        nowIndex++;
                        now=this.index;
                        tab();
                };
                aBtn2[i].onclick=function(){
                        nowIndex++;
                        now=this.index;
                        tab();
                };
        }
})();
/*隐藏有言*/
$(window).load(function(){
        var oParent=document.getElementById('uyan_cmt_box');
        var aDiv=oParent.getElementsByTagName('div');
        aDiv[aDiv.length-2].style.display='none';
});