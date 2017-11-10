//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*createHtml5Element*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*til*/
	r.addSpan(".til h2");
	/*sliderTil*/
	r.sliderTil({oParent:".til",aTil:".til small"});
	/*content*/
	r.scrollAddActive('.content');
	/*f5*/
	r.f5(r.scrollAddActive('.content'));
	/*vedio*/
	(function(){
		var aVedio=document.querySelectorAll('.vedio');
		var iLen=aVedio.length;
		for(var i=0;i<iLen;i++){
			aVedio[i].index=i;
			aVedio[i].bTrue=true;
			aVedio[i].onclick=function(){
				if(!this.bTrue){return;}
				this.bTrue=false;
				if(this.index==0){
					this.innerHTML="<iframe src=vedio.html#vedio"+(this.index+1)+" width=400 height=320 frameborder=no scrolling=no></iframe>"
				}else{
					this.innerHTML="<iframe src=vedio.html#vedio"+(this.index+1)+" width=428 height=351 frameborder=no scrolling=no></iframe>"	
				}
			}
		}
	})();
})