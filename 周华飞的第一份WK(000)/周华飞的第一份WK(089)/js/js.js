//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*date*/
$(function(){
	function getDay(day){  
	       var today = new Date();  		 
	       var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
	       today.setTime(targetday_milliseconds);
	       var tMonth = today.getMonth();  
	       var tDate = today.getDate();  
	       tMonth = fullZero(tMonth + 1);  
	       tDate = fullZero(tDate);  
	       return tMonth+"."+tDate;  
	}
	function fullZero(n){
		return n=n<10?'0'+n:''+n;	
	}
	function upDate(){
		var aSpan=$('.tab span');
		for(var i=0; i<4;i++){
			aSpan[i].innerHTML=getDay(i);
		}
	}
	upDate();
	setInterval(upDate,1000)
})



/*tabSwitch*/
function tabSwitch(aBtn,aCut){
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';	
				aCut[i].className='';
			}
			this.className='li_active';
			aCut[this.index].className='li_active';			
		}	
	}
}
