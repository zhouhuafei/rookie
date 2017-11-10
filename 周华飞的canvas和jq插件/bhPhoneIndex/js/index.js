//JavaScript Document
/*fn*/
var rookieFn={};
/*banner*/
TouchSlide({ slideCell:"#banner",titCell:'.hd li',mainCell:'.bd ul'});
/*feature*/
TouchSlide({ slideCell:"#feature",titCell:'.hd li',mainCell:'.bd ul'});
/*expert*/
(function(win,doc){
        var oExpert=doc.getElementById('expert');
        var oMore=oExpert.getElementsByClassName('more')[0];
        var aLi=oExpert.getElementsByTagName('li');
        var aImg=oExpert.getElementsByTagName('img');
        var defaultNum=6;//默认显示个数
        rookieFn.more=function(defaultNum,aLi,aImg,oMore){
                for(var i=0;i<defaultNum;i++){
                        aLi[i].className='active';
                        var src=aImg[i].getAttribute('_src');
                        if(!aImg[i].src){
                                aImg[i].src=src;
                        }
                }
                oMore.addEventListener('click',function(){
                        for(var i=0;i<aLi.length;i++){
                                if(!aLi[i].className){
                                        aLi[i].className='active';
                                        this.classList.add('active');
                                        var src=aImg[i].getAttribute('_src');
                                        if(!aImg[i].src){
                                                aImg[i].src=src;
                                        }
                                }
                        }
                },false);
        };
        rookieFn.more(defaultNum,aLi,aImg,oMore);
})(window,document);
/*communication*/
(function(win,doc){
        var oCommunication=doc.getElementById('communication');
        var oMore=oCommunication.getElementsByClassName('more')[0];
        var aLi=oCommunication.getElementsByTagName('li');
        var aImg=oCommunication.getElementsByTagName('img');
        var defaultNum=9;//默认显示个数
        rookieFn.more(defaultNum,aLi,aImg,oMore);
})(window,document);