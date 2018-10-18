	// JavaScript Document
	
	$(function(){		
		 //------------------------------------Õ³ÐÔµ¼º½À¸----------------------------------------------
		//------------------------------------------------------------
	       //--------------------------------------
		var aPos = [];
		for (var i = 0; i<$('.position').length; i++) {
			aPos.push($('.position').eq(i).offset().top-50);
		}
		//alert(aPos);
		$('.navm li').click(function() {
			$(window).unbind('scroll', fnWinScroll);
			$('.navm li').removeClass('select');
			$(this).addClass('select');
			//alert($(this).index());
			fnScroll($(this));
		});
		var timer = null;
		function fnScroll(obj) {
			clearInterval(timer);
			timer = setInterval(function() {
				var select = $(document).scrollTop();
				var iSpeed = 0;
				var iTarget = aPos[obj.index()];
				iSpeed = (iTarget - select) / 7;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
	
				if (Math.abs(iTarget - select) < 5) {
					clearInterval(timer);
					window.scrollTo(0, iTarget);
					$(window).bind('scroll', fnWinScroll);
				} else {
					window.scrollTo(0, select + iSpeed);
				}
			},
			30);
		}
		function fnWinScroll() {
			var select = $(document).scrollTop();
			for (var i = 0; i < aPos.length; i++) {
				if (select >= aPos[i]) {
					if (select < aPos[i + 1]) {
						$('.navm li').removeClass('select');
						$('.navm li').eq(i).addClass('select');
					}
					else {
						$('.navm li').removeClass('select');
						$('.navm li').eq(aPos.length-1).addClass('select');
					}
				}
			}
		};
		$(window).bind('scroll', fnWinScroll);
		//-------------------------------------------------------
		var bro=$.browser; 
		var binfo="";  
		if(bro.msie) {binfo=bro.version;} 
		//alert(binfo); 
		if(binfo == 6.0){
			$(window).scroll(function(){
				if($(window).scrollTop() > 678){
					$("#nav").stop().css({'top':'0'}).animate({top:$(window).scrollTop()+0},0);
				}
				else if($(window).scrollTop() < 678){
					$("#nav").stop().css({'position':'absolute','top':'678px'});
				}
			});
		}
		else{
			$(window).scroll(function() {
				var w_scrollTop = $(window).scrollTop();
				if(w_scrollTop > 678){
					 $("#nav").css({'position':'fixed','top':'0'});
				}
				else if(w_scrollTop < 678){
					$("#nav").css({'position':'absolute','top':'678px'});
				}
			});
		}
		//----------------------------------------------
	});


	
	
