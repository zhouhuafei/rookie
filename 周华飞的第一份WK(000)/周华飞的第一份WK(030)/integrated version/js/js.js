// JavaScript Document
eventBind(window,'load',function()
{
	/*header_top*/
	var oSearch_word=document.getElementById('search_word');
	var oSearch=document.getElementById('search');
	oSearch.onfocus=function()
	{
		if(oSearch.value=='')
		oSearch_word.innerHTML='';	
	}
	oSearch.onblur=function()
	{
		if(oSearch.value=='')
		oSearch_word.innerHTML='请输入搜索内容';	
	}
	
	/*vitiligo_case*/
	var oVitiligo_case=document.getElementById('vitiligo_case');
	var aVitiligo_ul=oVitiligo_case.getElementsByTagName('ul');
	var oVitiligo_ol=oVitiligo_case.getElementsByTagName('ol')[0];
	var aVitiligo_li=oVitiligo_ol.getElementsByTagName('li');
	show_hide(aVitiligo_li,'li_active',aVitiligo_ul,'ul_active');
	function show_hide(obj_btn,btn_class,obj_cut,cut_class)
	{
		for(var i=0;i<obj_btn.length;i++)
		{
			obj_btn[i].index=i;
			obj_btn[i].onmouseover=function()
			{
				for(var i=0;i<obj_btn.length;i++)
				{
					if(!obj_cut)
					{
					}
					else
					{
						
						obj_cut[i].className='';
					}
					obj_btn[i].className='';
				}	
				this.className=btn_class;
				if(!obj_cut)
				{
				}
				else
				{
					obj_cut[this.index].className=cut_class;
				}
			}	
		}
	}
	
	/*treatment_method*/
	var oTreatment_method=document.getElementById('treatment_method');
	var oTreatment_ol=oTreatment_method.getElementsByTagName('ol')[0];
	var aTreatment_ol_li=oTreatment_ol.getElementsByTagName('li')
	var oTreatment_ul=oTreatment_method.getElementsByTagName('ul')[0];
	var aTreatment_ul_li=oTreatment_ul.getElementsByTagName('li')
	show_hide(aTreatment_ol_li,'li_active',aTreatment_ul_li,'li_active');
	var oTreatment_ol1=oTreatment_method.getElementsByTagName('ol')[1];
	var aTreatment_ol_li1=oTreatment_ol1.getElementsByTagName('li')
	var oTreatment_ul1=oTreatment_method.getElementsByTagName('ul')[1];
	var aTreatment_ul_li1=oTreatment_ul1.getElementsByTagName('li')
	show_hide(aTreatment_ol_li1,'li_active',aTreatment_ul_li1,'li_active');
	
	/*the_hospital*/
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
	
	/*footer_nav*/
	var oFooter_nav=document.getElementById('footer_nav');
	var aFooter_a=oFooter_nav.getElementsByTagName('a');
	show_hide(aFooter_a,'a_active');
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
