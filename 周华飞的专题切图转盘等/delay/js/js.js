//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.onload=function(){
	var aBtn=document.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var aCut=document.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var iLen=aBtn.length;
	var now=0;
	aCut[0].className='active';	
	for(var i=0; i<iLen;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			now=this.index;
			for(var i=0; i<iLen;i++){
				aBtn[i].className='';
				aCut[i].className='';		
			}
			this.className='active';
			aCut[now].className='active';	
		}	
	}
}