//JavaScript Document
/*********************************
 *周华飞制作 QQ:1123486116
 *rookie making
 *rookie Copyright
 *未经允许禁止复制和盗用违权必究
**********************************/
/*how*/
$(function(){
	var aBtn=$('.how li');
	tab(aBtn);	
})

/*therapy*/
$(function(){
	var aBtn=$('.therapy ol li');
	var aCut=$('.therapy ul li');
	tab(aBtn,aCut);
})

/*team*/
$(function(){
	var aBtn=$('.team ol li');
	var aCut=$('.team ul li');
	tab(aBtn,aCut);
})

/*recovery*/
$(function(){
	var aBtn=$('.recovery ol li');
	var aCut=$('.recovery ul li');
	tab(aBtn,aCut);
})

/*tab*/
function tab(aBtn,aCut){
	for(var i=0,len=aBtn.length; i<len;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0,len=aBtn.length; i<len;i++){
				aBtn[i].className='';
				aCut&&(aCut[i].className='');	
			}
			this.className='active';
			aCut&&(aCut[this.index].className='active');
		}			
	}
}