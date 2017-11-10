/* jQuery jtClite beta_v0.1  */

/*.scoll_box>>>.s_box>>>.s_con至少需要三级目录*/

(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);

/*promo*/

(function(a){a.fn.extend({banner_thaw:function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,thumbNowClass:"hover",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj!=null){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}e=g;if(b.autoChange==true){clearInterval(c);c=setInterval(j,b.changeTime)}}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj!=null){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse==true){return false}});if(b.thumbOverEvent==true){i.mouseenter(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)});i.mouseleave(function(){clearTimeout(f)})}}if(b.botNext!=null){a(b.botNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.botPrev!=null){a(b.botPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange==true){c=setInterval(j,b.changeTime);if(b.overStop==true){h.mouseenter(function(){clearInterval(c)});h.mouseleave(function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

$(".logo .scoll").jCarouselLite({//滚动控制
	visible: 1,
	scroll: 1,
	auto: 1200,
	vertical:true,
	speed: 1200
});

(function($) {
$.fn.flashSlider = function(options) {
	var options = $.extend({},
	$.fn.flashSlider.defaults, options);
	this.each(function() {
		var obj = $(this);
		var curr = 1;
		var $img = obj.find("img");
		var s = $img.length;
		var w = obj.width();
		var h = obj.height();
		var $flashelement = $(obj.children('ul'), obj);
		$flashelement.css('width', s * w);
		options.vertical?'':$(obj.find('li'), obj).css('float', 'left');

		$(options.onum).each(function(index){
		  $(this).hover(function() {
    			flash(index+1, true)
    		},
    		function() {
    			timeout = setTimeout(function() {
    				flash((curr / 1 + 1), false)
    			},
    			options.pause / 5)
    		})
		})
		function setcurrnum(index) {
			$(options.onum).removeClass(options.btnStyle).eq(index).addClass(options.btnStyle)
		}
		function flash(index, clicked) {
			$flashelement.stop();
			var next = index == s ? 1 : index + 1;
			curr = index - 1;
			setcurrnum((index - 1));
            if(options.oStyle=='slider'){
    			if (!options.vertical) {
    				p = -((index - 1) * w);
    				$flashelement.animate({
    					marginLeft: p
    				},
    				options.speed)
    			} else {
    				p = -((index - 1) * h);
    				$flashelement.animate({
    					marginTop: p
    				},
    				options.speed)
    			};
            }else if(options.oStyle=='fade'){
               obj.find('li').fadeOut().eq(index-1).fadeIn();
            }else{
               obj.find('li').hide().eq(index-1).show(); 
            }
			if (clicked) {
				clearTimeout(timeout)
			};
			if (options.auto && !clicked) {
				timeout = setTimeout(function() {
					flash(next, false)
				},
				options.speed + options.pause)
			}
		}
		var timeout;
		setcurrnum(0);
		if (options.auto) {
			timeout = setTimeout(function() {
				flash(2, false)
			},
			options.pause)
		}
	})
};
$.fn.flashSlider.defaults = {
    oStyle:'',//slider,fade为空时无效果
    btnStyle:'on',//当前数字样式
    onum:'#onum span',
	vertical: true,//oStyle==slider才有效
	speed: 800,//切换速度
	auto: true,//自动切换
	pause: 2000//间隔时间
}
})(jQuery);

$(function() {
    $("#slider").flashSlider( {
    onum:'#onum span'
    });
});
/****切换***/
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

var tab_nav_li = $('.tab_nav li');//切换样式

	tab_nav_li.mouseover(function(){

		$(this).addClass('selected')

				 .siblings().removeClass('selected');

	var tab_nav_li_index = tab_nav_li.index(this);

	$('.tab_switch>.tabcon').eq(tab_nav_li_index).show()

					 .siblings().hide();

	}).hover(function(){

		$(this).addClass('');

	},function(){

		$(this).removeClass('');	

	});
	
	
function nTabs(thisObj, Num,str) {
    if (thisObj.className == "lihover") return;
    var tabList = thisObj.parentNode.getElementsByTagName("li");
    for (i = 0; i < tabList.length; i++) {
        if (i == Num) {
            thisObj.className = "lihover";
            document.getElementById(str+i).style.display = "block";
        } else {
            tabList[i].className = "";
            document.getElementById(str+i).style.display = "none";
        }
    }
}

// 特色疗法
$(function(){
	var tab_menu_li = $('.wrap1 dl');//高亮当前选项
	tab_menu_li.mouseover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});	
});

$(function(){
	$(".gysy_left h3").hide();
	$(".gysy_left h3").eq(0).show();
	$(".gysy_left p").hide();
	$(".gysy_left p").eq(0).show();
	
	$(".gysy_right li").each(function(i){
		$(this).mouseover(function(){
			$(".gysy_right li").removeClass("active");
			$(".gysy_right li").eq(i).addClass("active");
			$(".gysy_center li").removeClass("active");
			$(".gysy_center li").css("zIndex",1);
			$(".gysy_center li").eq(i).css("zIndex",2);
			$(".gysy_center li").eq(i).addClass("active");
			$(".gysy_left h3").hide();
			$(".gysy_left h3").eq(i).show();
			$(".gysy_left p").hide();
			$(".gysy_left p").eq(i).show();
		})
	});
})

$(function(){
	$('.listnr li').each(function(index){
		$(this).hover(function(){
			$('.listnr li.selected').removeClass('selected');
			$(this).addClass('selected');
		})
	})
});
$(function(){
	$('.sidejs li').each(function(index){
		$(this).hover(function(){
			$('.sidejs li.selected').removeClass('selected');
			$(this).addClass('selected');
		})
	})
});
$(function(){
	$('.hmzc li').each(function(index){
		$(this).hover(function(){
			$('.hmzc li.selected').removeClass('selected');
			$(this).addClass('selected');
		})
	})
});
$(".tab_nav").each(function(tabThis){
		var tab_nav_li = $(".tab_nav:eq("+  tabThis +") li");//切换样式
		tab_nav_li.mouseover(function(){
		$(this).addClass('selected')
		.siblings().removeClass('selected');
		var tab_nav_li_index = tab_nav_li.index(this);
		$(".tab_switch:eq("+ tabThis +")>.tabcon").eq(tab_nav_li_index).show()
						 .siblings().hide();
		}).hover(function(){
			$(this).addClass('');
		},function(){
			$(this).removeClass('');	
		});
	})


/*the_hospital*/
$(function(){
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
})	

/*banner*/
$(function(){
	var aBtn=$('#banner li');
	var aCut=$('#banner div');
	timerSwitch(aBtn,aCut)	
	function timerSwitch(aBtn,aCut){
		var now=0;
		var timer=null;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){	
				now=this.index;	
				tab();	
			}	
		}
		function tab(){	
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';	
				aCut[i].className='';
			}
			aBtn[now].className='li_active';
			aCut[now].className='div_select';
		}
		function next(){
			now++;
			now%=aBtn.length;
			tab();
		}
		timer=setInterval(next,5000);
		aCut[0].parentNode.onmouseover=function(){clearInterval(timer);}
		aCut[0].parentNode.onmouseout=function(){timer=setInterval(next,5000);}
	}
})