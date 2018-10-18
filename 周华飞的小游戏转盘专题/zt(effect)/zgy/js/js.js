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
	/*til*/
	r.addSpan(".til h2");
	r.sliderTil({"oParent":".til","aTil":".til small"});
	/*attention*/
	r.tabSwitch({"oParent":"#attention"});
	/*box6*/
	r.tabSwitch({"oParent":".box6","aBtn":".box6 span","bOpacity":true});	
})
/*************************以下为复制别人的代码***************************************/
/*cure*/
$(function(){
	$('.box2_left p').hover(function(){
		var index=$('.box2_left p').index(this);
		$('.box2_left p').removeClass('cur').eq(index).addClass('cur');
		$('.box2_right li').hide().eq(index).show();
	})
	$('.box2_right li').hover(function(){
		var index=$('.box2_right li').index(this);
		$('.box2_right li div').hide().eq(index).show();
	})	
});
/*five*/
$(function(){
	$('.box3 li').hover(function(){
		var index=$('.box3 li').index(this);
		$('.box3 li div').show().eq(index).hide();
		$('.box3 li span').hide().eq(index).show();
	})
});
/*seven*/	
$(function(){
	$('.box4 dl').hover(function(){
		var index=$('.box4 dl').index(this);
		$('.box4 dl').removeClass('cur').eq(index).addClass('cur');
	})
});
/*box7*/
$(function(){
	$('.box7_1 li').hover(function(){
		var index=$('.box7_1 li').index(this);
		$('.box7_1 li').removeClass('cur').eq(index).addClass('cur');
		$('.box7_2 li').hide().eq(index).show();
	})
});