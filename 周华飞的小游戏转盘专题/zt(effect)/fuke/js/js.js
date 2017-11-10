//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.addEventListener('load',function(){
	/*expert*/
	(function(){
		var aEx=document.querySelectorAll('.expert');
		var aLi=aEx[0].querySelectorAll('dl');
		var iLen=aLi.length;
		//aEx[1].style.display='none';
		var oFig=document.querySelector('figure');
		oFig.onclick=function(){
			aLi[iLen-1].classList.add('re');
			this.style.display='none';
			aEx[1].style.display='block';	
		}			
	})();
},false)