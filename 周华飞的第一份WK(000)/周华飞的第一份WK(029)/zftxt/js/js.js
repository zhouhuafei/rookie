// JavaScript Document
eventBind(window,'load',function()
{
	/*top_nav*/
	var oTop_nav=document.getElementById('top_nav'); 
	var aTop_li=oTop_nav.getElementsByTagName('a');
	navTab(aTop_li,'a_active')
	function navTab(obj,attr)
	{
		for(var i=0; i<obj.length; i++)
		{
			obj[i].onmouseover=function()
			{
				for(var i=0; i<obj.length; i++)
				{
					obj[i].className='';	
				}
				this.className=attr;
			}	
		}
		
	}
	
	/*style_nav*/
	var oStyle_nav=document.getElementById('style_nav');
	var aStyle_li=oStyle_nav.getElementsByTagName('li');
	var oStyle_move=document.getElementById('move');
	var oStyle_move_a=oStyle_move.getElementsByTagName('a')[0];
	var oStyle_move_img=oStyle_move.getElementsByTagName('img')[0];
	var arrStyleOldImg=['images/style1.png','images/style2.png','images/style3.png','images/style4.png','images/style5.png','images/style6.png','images/style7.png','images/style8.png']
	var arrStyleNewImg=['images/style1_1.png','images/style2_2.png','images/style3_3.png','images/style4_4.png','images/style5_5.png','images/style6_6.png','images/style7_7.png','images/style8_8.png']
	var roll=0;
	for(var i=0; i<aStyle_li.length; i++)
	{
		aStyle_li[i].index=i;
		aStyle_li[i].onmouseover=function()
		{
			for(var i=0; i<aStyle_li.length; i++)
			{
				aStyle_li[i].src=arrStyleOldImg[i];	
			}
			oStyle_move_img.src=arrStyleNewImg[this.index];
			oStyle_move_a.href=aStyle_li[this.index].title;
			oStyle_move.style.left=aStyle_li[this.index].offsetLeft+'px';
			roll=360*this.index;
			oStyle_move.style.transform='rotate('+roll+'deg)';
		}	
	}
	
	/*footer_nav*/
	var oFooter_nav=document.getElementById('footer_nav');
	var aFooter_a=oFooter_nav.getElementsByTagName('a');
	navTab(aFooter_a,'a_active');
})
function eventBind(obj,ev,fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+ev,fn);
	}
	else
	{
		obj.addEventListener(ev,fn,false);
	}	
}