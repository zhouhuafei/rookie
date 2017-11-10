eventBind(window,'load',function()
{
	var oSeven_style=document.getElementById('seven_style');
	var oOl=oSeven_style.getElementsByTagName('ol')[0];
	var aOl_li=oOl.getElementsByTagName('li');
	var oUl=oSeven_style.getElementsByTagName('ul')[0];
	var aUl_li=oUl.getElementsByTagName('li');
	for(var i=0; i<aOl_li.length;i++)
	{
		aOl_li[i].index=i;
		aOl_li[i].onmouseover=function()
		{
			for(var i=0; i<aOl_li.length;i++)
			{
				aOl_li[i].className='';
				aUl_li[i].className=''
			}
			this.className='li_active';
			aUl_li[this.index].className='li_active'
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