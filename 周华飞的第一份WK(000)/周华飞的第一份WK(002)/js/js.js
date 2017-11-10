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
	/*three_nav选项卡*/
	var oThreeNav=document.getElementById('three_nav');
	var aThreeA=oThreeNav.getElementsByTagName('a');
	var oWord=document.getElementById('word');
	var aWordDiv=oWord.getElementsByTagName('div');
	for(var i=0;i<aThreeA.length;i++)
	{
		
		aThreeA[i].index=i;
		aThreeA[i].onmouseover=function()
		{
			for(var j=0;j<aThreeA.length;j++)
			{
				aWordDiv[j].className='';
				aThreeA[j].className='';
			}
			this.className='a_active';
			aWordDiv[this.index].className='div_show1';	
		}
	}	
	
	/*four_nav选项卡*/
	var oFour_nav=document.getElementById('four_nav');
	var aFour_nav_a=oFour_nav.getElementsByTagName('a');
	var oFour_nav_div=document.getElementById('four_nav_div');
	var aFour_nav_div=oFour_nav_div.getElementsByTagName('div');
	for( var i=0;i<aFour_nav_a.length;i++)
	{
		aFour_nav_a[i].index=i;
		aFour_nav_a[i].onmouseover=function()
		{
			for(var j=0;j<aFour_nav_a.length;j++)
			{
				aFour_nav_div[j].className='';
				aFour_nav_a[j].className='';
			}
			this.className='a_active';
			aFour_nav_div[this.index].className='div_show'; 
		}
	}
}