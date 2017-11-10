// JavaScript Document
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
eventBind(window,'load',function()
{		
	/*cure*/
	var oCure=document.getElementById('cure');
	var oOl2=oCure.getElementsByTagName('ol')[0];
	var aOl_li2=oOl2.getElementsByTagName('li');
	var oUl2=oCure.getElementsByTagName('ul')[0];
	var aUl_li2=oUl2.getElementsByTagName('li');
	var aUl_div2=oUl2.getElementsByTagName('div');
	for(var i=0; i<aOl_li2.length; i++)
	{
		aOl_li2[i].index=i;
		aOl_li2[i].onmouseover=function()
		{
			for(var i=0; i<aOl_li2.length; i++)
			{
				aOl_li2[i].className='';
				aUl_li2[i].className='';
				aUl_div2[i].className='triangle';
			}
			this.className='li_active';
			aUl_li2[this.index].className='li_active';
			aUl_div2[this.index].className='triangle triangle_active';
		}
	}
})	
