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
window.addEventListener('load',function(){
	
	/*protect*/
	(function(){
		var aDt=document.getElementsByClassName('protect')[0].getElementsByTagName('dt');
		var aDd=document.getElementsByClassName('protect')[0].getElementsByTagName('dd');
		var iLen=aDt.length;
		for(var i=0;i<iLen;i++){
			if(i==1){
				continue;
			}else{
				aDt[i].style.marginTop=parseInt((aDd[i].offsetHeight-60)/2)+'px';
			}
		}
	})();
},false)