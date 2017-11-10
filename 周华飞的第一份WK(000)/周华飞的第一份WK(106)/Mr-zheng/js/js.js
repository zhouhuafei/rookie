//JavaScript Document
/*********************************
 *rookie qq:1123486116
 *rookie making
 *rookie copyright
**********************************/
window.onload=function(){
	/*contrast*/
	var oZoomPic=document.getElementById('zoomPic');
	var oPrev=oZoomPic.getElementsByTagName('span')[0];
	var oNext=oZoomPic.getElementsByTagName('span')[1];
	var aImg=oZoomPic.getElementsByTagName('img');
	var aLi=oZoomPic.getElementsByTagName('li');
	var aData=[];
	for(var i=0,iLen=aImg.length;i<iLen;i++){
		aData.push([aLi[i].style.zIndex,aLi[i].offsetLeft,aLi[i].offsetTop,aImg[i].offsetHeight]);	
	}
	function data(){		
			$('#zoomPic li').each(function(i){
				$(this).css('zIndex',aData[i][0]);
				$(this).stop().animate({left:aData[i][1],top:aData[i][2]},{queue:false});
			})
			$('#zoomPic img').each(function(i){
				$(this).stop().animate({height:aData[i][3]});
			})			
	}
	function prev(){		
		aData.unshift(aData[aData.length-1]);
		aData.pop(aData[aData.length]);
		data();
	}
	function next(){
		aData.push(aData[0]);
		aData.shift(aData[0]);
		data();
	}
	oPrev.onclick=prev;
	oNext.onclick=next;
	setInterval(next,6000);
}