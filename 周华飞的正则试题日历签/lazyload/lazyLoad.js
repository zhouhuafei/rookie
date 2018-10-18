function lazyLoad(){
  var aImg=document.getElementsByClassName('lazy-load');
  var iLen=aImg.length;
  var timer=null;
  var interval=80;
  function offsetTop(obj){
    var top=0;
    while(obj){
      top+=obj.offsetTop;
      obj=obj.offsetParent;
    }
    return top;
  }
  function show(){
    var iClientH=document.documentElement.clientHeight;
    var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var iResultTop=iClientH+iScrollTop;
    for(var i=0;i<iLen;i++){
      var obj=aImg[i];
      var iObjTop=offsetTop(obj);
      var iObjBottom=offsetTop(obj)+obj.offsetHeight;
      if(iResultTop>=iObjTop&&iObjTop>=iScrollTop||iObjBottom>iScrollTop&&iObjBottom<iResultTop){
        if(obj.src!=obj.dataset.src){
          obj.src=obj.dataset.src;
        }
      }
    }
  }
  show();
  window.addEventListener('scroll',function(){
    clearTimeout(timer);
    timer=setTimeout(show,interval);
  },false);
}
lazyLoad();