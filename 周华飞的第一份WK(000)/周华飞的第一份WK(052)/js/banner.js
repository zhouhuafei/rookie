// 主站首页通用
document.writeln("<style>")
document.writeln(".banner{ width:100%; height:458px; position:relative; overflow:hidden;}");
document.writeln(".banner li{width:100%; height:458px; overflow:hidden; position:absolute;}");
document.writeln(".banner li.pic1{ background:url(/images/banner.jpg) center center no-repeat;}");
document.writeln(".banner li.pic2{ background:url(/images/banner1.jpg) center center no-repeat;}");
document.writeln(".banner li.pic3{ background:url(/images/banner2.jpg) center center no-repeat;}");
document.writeln(".banner li.pic4{ background:url(/images/banner3.jpg) center center no-repeat;}");
document.writeln(".banner li p{height:458px;margin:0 auto;position:relative;}");
document.writeln(".banner li p a{ height:100px; width:100%; position:absolute; bottom:35px; right:0;}");
document.writeln(".banner .btn{ width:100%;height:45px;line-height:45px; text-align:center; position:absolute; bottom:2px; z-index:9}");
document.writeln(".banner .btn span{display:inline-block; _display:inline; _zoom:1;  background:#a5a5a5; width:15px; height:15px; _font-size:0; margin:12px 5px 0px; cursor:pointer; z-index:9; border-radius:50%}");
document.writeln(".banner .btn span.on{ background:#006ab6; z-index:9}");
document.writeln("");
document.writeln(".banner .preNext{width:44px;height:44px;position:absolute;top:180px;background:url(/images/sprite.png) no-repeat left bottom;cursor:pointer;z-index:9; opacity:0;transition: all 0.3s linear 0s;}");
document.writeln(".banner .pre{left:0%; z-index:9}");
document.writeln("");
document.writeln(".banner .next{right:0%;background-position:right bottom;z-index:9}");
document.writeln(".banner:hover .preNext{opacity:0.5;} ");
document.writeln(".banner:hover .pre{left:10%; } ");
document.writeln(".banner:hover .next{right:10%;} ");
document.writeln(".banner .pre:hover,.banner .next:hover{opacity:1;}");
document.writeln("</style>")
$(function(){
	var len = $(".banner ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$(".banner").append(btn);
	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$(".banner .btn span").css("opacity",1).mouseover(function() {
		index = $(".banner .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");
	//上一页、下一页按钮透明度处理
	//上一页按钮
	$(".banner .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	//下一页按钮
	$(".banner .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	
	//IPAI
	$(".banner").on("swipeleft",function(){
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
$(".banner").on("swiperight",function(){
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$(".banner").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},6000); //自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		$(".banner .btn span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); //为当前的按钮切换到选中的效果
		$(".banner ul li").stop(true,false).animate({"opacity":"0"},500).css("z-index",0).eq(index).stop(true,false).animate({"opacity":"1"},500).css("z-index",1); //为当前的按钮切换到选中的效果

	}
})

document.writeln("<div class=\"banner clearFix\">");
document.writeln("  <ul>");
document.writeln("    <li class=\"pic1\"><p class=\"commonWidth_980\"><a onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);\"></a></p></li>");
document.writeln("    <li class=\"pic2\"><p class=\"commonWidth_980\"><a onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);\"></a></p></li>");
document.writeln("    <li class=\"pic3\"><p class=\"commonWidth_980\"><a onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);\"></a></p></li>");
document.writeln("    <li class=\"pic4\"><p class=\"commonWidth_980\"><a onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);\"></a></p></li>");
document.writeln("  </ul>");
document.writeln("  ");
document.writeln("  <div class=\"btn\"></div>");
document.writeln("</div>");