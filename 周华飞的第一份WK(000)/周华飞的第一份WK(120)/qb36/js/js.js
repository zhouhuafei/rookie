// JavaScript Document
$(function(){
	jQuery(".xgdb").slide({titCell:".parHd li",mainCell:".parBd ul"})
	jQuery(".showsWrap").slide({titCell:".parHd li",mainCell:".shows ul",effect:"leftLoop",autoPlay:true,interTime:5000})	
	/*the_hospital*/
	(function(){
		var aBriefing_li=document.getElementById('briefing_ul').getElementsByTagName('li');
		var aBriefing_a=document.getElementById('briefing_ul').getElementsByTagName('a');
		var aBriefing_span=document.getElementById('briefing').getElementsByTagName('span');
		var aBriefing_em=document.getElementById('briefing_ul').getElementsByTagName('em');
		var aTriangle=document.getElementById('briefing_ul').getElementsByTagName('div');
		for(var i=0;i<aBriefing_li.length;i++)
		{
			aBriefing_li[i].index=i;
			aBriefing_li[i].onmouseover=function()
			{
				for(var j=0; j<aBriefing_li.length;j++)
				{
					aBriefing_li[j].className='';
					aBriefing_span[j].style.display='none';
					aTriangle[j].style.display='none';
					aBriefing_a[j].style.color='#000';
					aBriefing_em[j].className='briefing_em'+(j+1);
				}
				this.className='li_active';
				aBriefing_span[this.index].style.display='block';
				aTriangle[this.index].style.display='block';
				aBriefing_a[this.index].style.color='#fff';
				aBriefing_em[this.index].className='briefing_em'+(this.index+1+'1')+'';
			}
		}		
	})();
})