// JavaScript Document
eventBind(window,'load',function()
{
	var oChoice_ol=document.getElementById('choice_ol');
	var aChoice_ol_li=oChoice_ol.getElementsByTagName('li');
	var aChoice_ol_three=oChoice_ol.getElementsByTagName('div');
	var aChoice_ol_em=oChoice_ol.getElementsByTagName('em');	
	var oChoice_ul=document.getElementById('choice_ul');
	var aChoice_ul_li=oChoice_ul.getElementsByTagName('li');
	for(var i=0;i<aChoice_ol_li.length;i++)
	{
		aChoice_ol_li[i].index=i;
		aChoice_ol_li[i].onmouseover=function()
		{
			for(var i=0;i<aChoice_ol_li.length;i++)
			{
				aChoice_ol_li[i].className='';	
				aChoice_ul_li[i].className='';
				aChoice_ol_three[i].className='three';
				aChoice_ol_em[i].className='choice'+i+'';
			}
			this.className='li_active';
			aChoice_ul_li[this.index].className='li_active';
			aChoice_ol_three[this.index].className='three three_actvie';
			aChoice_ol_em[this.index].className='choice'+this.index+this.index+'';
		}
	}

		
				



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