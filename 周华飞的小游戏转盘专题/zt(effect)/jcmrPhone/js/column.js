//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.addEventListener('DOMContentLoaded',function(){
	/*column*/
	TouchSlide({slideCell:"#column",effect:"leftLoop"});
	/*aside*/
	(function(){
		function aside(){
			var oAside=document.querySelector('#aside');
			var oOl=document.querySelector('#aside ol');
			var iHeight=oOl.offsetHeight;
			oAside.style.height=iHeight+'px';
			new iScroll('aside',{hScrollbar:false,vScrollbar:false});
		}
		aside();
		window.addEventListener('resize',aside,false);
	})();		
},false)
