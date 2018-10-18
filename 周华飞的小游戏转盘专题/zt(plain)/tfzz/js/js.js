//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
/*createHtml5Element*/
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('aside');
document.createElement('video');
document.createElement('audio');
var r=new Rookie();
r.version();
r.addEvent(window,'load',function(){
	/*nav*/
	r.flowNav({obj:"#nav",child:"#nav li",target:".target"})
	/*banner*/
	r.tabSwitch({oParent:"#banner",bOpacity:true});	
	/*til*/
	r.addSpan(".til h2");
	r.sliderTil({oParent:".til",aTil:".til small"});
	
	r.tabSwitch({oParent:"#slidebox2",bOpacity:true,aBtn:"#slidebox2 .btn2 span"});
	
	
		
	/***********************以下是我以前写的,现在看着以前写的代码,我只想说,这一堆堆的都是什么狗屎*******************************/
	/*process*/
	(function(){	
		var oProcess=document.getElementById('process');
		var aProcess_li=oProcess.getElementsByTagName('li');
		var aProcess_p=oProcess.getElementsByTagName('p');
		var aProcess_h2=oProcess.getElementsByTagName('h2');
		for(var i=0; i<aProcess_li.length; i++)
		{
			aProcess_li[i].index=i;
			aProcess_li[i].onmouseover=function()
			{
				for(var i=0; i<aProcess_li.length; i++)
				{
					aProcess_li[i].className='';
					aProcess_h2[i].className='';
					aProcess_p[i].className='';	
				}
				this.className='li_active';
				aProcess_h2[this.index].className='h2_active';
				aProcess_p[this.index].className='p_active';
			}	
		}	
	})();
	
	/*advantage*/
	(function(){
		var oAdvantage=document.getElementById('advantage');
		var aAdvantage_li=oAdvantage.getElementsByTagName('li');
		var aAdvantage_div=oAdvantage.getElementsByTagName('div');
		var aAdvantage_span=oAdvantage.getElementsByTagName('span');
		for(var i=0;i<aAdvantage_li.length;i++)
		{
			aAdvantage_li[i].index=i;
			aAdvantage_li[i].onmouseover=function()
			{
				for(var i=0;i<aAdvantage_li.length;i++)
				{
					aAdvantage_div[i].style.display='block';
					aAdvantage_span[i].style.display='none';
				}
				aAdvantage_div[this.index].style.display='none';
				aAdvantage_span[this.index].style.display='block';
			}
		}	
	})();
	
	/*replay*/
	(function(){
		var oReplay=document.getElementById('replay');
		var aReplay_li=oReplay.getElementsByTagName('li');
		var aReplay_p=oReplay.getElementsByTagName('p');
		var aReplay_span=oReplay.getElementsByTagName('span');
		var aReplay_div=oReplay.getElementsByTagName('div');
		for(var i=0;i<aReplay_li.length;i++)
		{
			aReplay_li[i].index=i;
			aReplay_li[i].onmouseover=function()
			{
				for(var i=0;i<aReplay_li.length;i++)	
				{
					aReplay_p[i].className='';
					aReplay_span[i].className='';
					if(i%2)
					{
						aReplay_div[i].style.borderBottomColor='#d2d2d2'
					}	
					else
					{
						aReplay_div[i].style.borderTopColor='#d2d2d2'	
					}	
						
				}
				aReplay_p[this.index].className='p_active';
				aReplay_span[this.index].className='span_active';
				if(this.index%2)
				{
					aReplay_div[this.index].style.borderBottomColor='#4e3c30'
				}	
				else
				{
					aReplay_div[this.index].style.borderTopColor='#4e3c30'	
				}
			}
		}			
	})();
})