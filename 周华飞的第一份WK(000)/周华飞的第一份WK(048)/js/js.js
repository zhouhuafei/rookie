// JavaScript Document
eventBind(window,'load',function()
{
	/*the_hospital*/
	(function()
	{
		var oThe_hospital=document.getElementById('the_hospital');
		var oThe_ol=oThe_hospital.getElementsByTagName('ol')[0];
		var aThe_ol_li=oThe_ol.getElementsByTagName('li');
		var aThe_ol_div=oThe_ol.getElementsByTagName('div');
		var aThe_ol_em=oThe_ol.getElementsByTagName('em');
		var oThe_ul=oThe_hospital.getElementsByTagName('ul')[0];
		var aThe_ul_li=oThe_ul.getElementsByTagName('li');
		for(var i=0; i<aThe_ol_li.length;i++)
		{
			aThe_ol_li[i].index=i;
			aThe_ol_li[i].onmouseover=function()
			{
				for(var i=0; i<aThe_ol_li.length;i++)
				{
					aThe_ol_li[i].className='';
					aThe_ol_div[i].className='';
					aThe_ul_li[i].className=''	
					aThe_ol_em[i].className='the_hospital_icon'+(i+1)+''
				}
				this.className='li_active';
				aThe_ol_div[this.index].className='div_active';
				aThe_ol_em[this.index].className='the_hospital_icon'+(this.index+1+'1')+'';
				aThe_ul_li[this.index].className='li_active'
			}	
		}			
	})();
	

		
				



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