// JavaScript Document
eventBind(window,'load',function()
{
	/*resume*/
	var oResume=document.getElementById('resume');
	var aResume_p=oResume.getElementsByTagName('p');	
	var aResume_line=oResume.getElementsByTagName('div');
	var aResume_li=oResume.getElementsByTagName('li');
	var aResume_span=oResume.getElementsByTagName('span');
	for(var i=0; i<aResume_li.length;i++)
	{
		aResume_line[i].style.height=aResume_p[i].offsetHeight+'px';
		aResume_line[i].style.bottom=-aResume_p[i].offsetHeight-4+'px';
		aResume_li[i].style.marginBottom=aResume_p[i].offsetHeight+'px';
		if(i!=0){aResume_p[i].style.top='-6px';}
		aResume_li[i].index=i;
		aResume_li[i].onmouseover=function()
		{
			for(var i=1; i<aResume_li.length;i++)
			{
				aResume_li[i].className='';
				aResume_span[i].className='';
				aResume_p[i].className='';
			}
			this.className='li_active';
			aResume_p[this.index].className='p_active';
			aResume_span[this.index].className='span_active';
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