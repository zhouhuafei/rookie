// JavaScript Document

/*创建HTML5元素*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');




window.onload=function()
{	
 	var oJiao_point=document.getElementById('jiao_point');
	var oJiaoLi=oJiao_point.getElementsByTagName('a');
	var oJiaodian=document.getElementById('jiaodian');
	var oDiv=oJiaodian.getElementsByTagName('div');
	for(var i=0; i<oJiaoLi.length; i++)
	{
		oJiaoLi[i].index=i;
		oJiaoLi[i].onmousemove=function()
		{	
			for(var j=0; j<oJiaoLi.length;j++)
			{
				oJiaoLi[j].className='';
				oDiv[j].style.display='none';			
			}
			this.className='active';
			oDiv[this.index].style.display='block';
			
		}
	}	
}