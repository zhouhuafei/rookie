//JavaScript Document
/*dynamic*/
(function(win,doc){
        var oDynamic=doc.getElementById('dynamic');
        var oMore=oDynamic.getElementsByClassName('more')[0];
        var aDl=oDynamic.getElementsByTagName('dl');
        var defaultNum=6;//默认显示个数
        for(var i=0;i<defaultNum;i++){
                aDl[i].className='active';        }
        oMore.addEventListener('click',function(){
                for(var i=0;i<aDl.length;i++){
                        if(!aDl[i].className){
                                aDl[i].className='active';
                                this.classList.add('active');
                        }
                }
        },false);
})(window,document);
/*other-banner*/
TouchSlide({ slideCell:"#other-banner",titCell:'.hd li',mainCell:'.bd ul'});