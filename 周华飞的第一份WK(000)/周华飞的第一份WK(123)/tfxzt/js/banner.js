// ��վ��ҳͨ��
document.writeln("<style>")
document.writeln(".banner{ width:100%; height:500px; position:relative; overflow:hidden;}");
document.writeln(".banner li{width:100%; height:500px; overflow:hidden; position:absolute;}");
document.writeln(".banner li a{ display:block;}");
document.writeln(".banner li a.banBtn{ display:block; width:100%; height:60px; position:absolute; left:0; bottom:74px; z-index:3;}");
document.writeln(".banner li.pic1{ background:url(images/banner.jpg) center center no-repeat;}");
//document.writeln(".banner li.pic2{ background:url(images/banner1.jpg) center center no-repeat;}");
//document.writeln(".banner li.pic3{ background:url(images/banner3.jpg) center center no-repeat;}");
document.writeln(".banner li.pic4{ background:url(images/banner4.jpg) center center no-repeat;}");
document.writeln(".banner li p{height:458px;margin:0 auto;position:relative;}");

document.writeln(".banner .btns{ width:100%;height:45px;line-height:45px; text-align:center; position:absolute; bottom:2px; z-index:9}");
document.writeln(".banner .btns span{display:inline-block; _display:inline; _zoom:1;  background:#a5a5a5; width:15px; height:15px; _font-size:0; margin:12px 5px 0px; cursor:pointer; z-index:9; border-radius:50%}");
document.writeln(".banner .btns span.on{ background:#006ab6; z-index:9}");
document.writeln("");
document.writeln(".banner .preNexts{width:44px;height:44px;position:absolute;top:180px;background:url(images/sprite.png) no-repeat left bottom;cursor:pointer;z-index:9; opacity:0;transition: all 0.3s linear 0s;}");
document.writeln(".banner .pres{left:0%; z-index:9}");
document.writeln("");
document.writeln(".banner .nexts{right:0%;background-position:right bottom;z-index:9}");
document.writeln(".banner:hover .preNexts{opacity:0.5;} ");
document.writeln(".banner:hover .pres{left:10%; } ");
document.writeln(".banner:hover .nexts{right:10%;} ");
document.writeln(".banner .pres:hover,.banner .nexts:hover{opacity:1;}");
document.writeln("</style>")
$(function(){
	var len = $(".banner ul li").length; //��ȡ����ͼ����
	var index = 0;
	var picTimer;
	//���´���������ְ�ť�Ͱ�ť��İ�͸������������һҳ����һҳ������ť
	var btns = "<div class='btns'>";
	for(var i=0; i < len; i++) {
		btns += "<span></span>";
	}
	btns += "</div><div class='preNexts pres'></div><div class='preNexts nexts'></div>";
	$(".banner").append(btns);
	//ΪС��ť�����껬���¼�������ʾ��Ӧ������
	$(".banner .btns span").css("opacity",1).mouseover(function() {
		index = $(".banner .btns span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");
	//��һҳ����һҳ��ť͸���ȴ���
	//��һҳ��ť
	$(".banner .pres").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	//��һҳ��ť
	$(".banner .nexts").click(function() {
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
	
	//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
	$(".banner").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},6000); //�Զ����ŵļ������λ������
	}).trigger("mouseleave");
	//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
	function showPics(index) { //��ͨ�л�
		$(".banner .btns span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
		$(".banner ul li").stop(true,false).animate({"opacity":"0"},500).css("z-index",0).eq(index).stop(true,false).animate({"opacity":"1"},500).css("z-index",1); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��

	}
})

document.writeln("<div class=\"banner clearFix\">");
document.writeln("  <ul>");
document.writeln("    <li class=\"pic4\"><a class=\"banBtn\" onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);return false;\"></a><a target=\"_self\" href=\"http://pfb.skinjc.com/special/tfxzt/\"><p class=\"commonWidth_1000\"></p></a></li>");
document.writeln("    <li class=\"pic1\"><a target=\"_blank\" href=\"http://zhifa.skinjc.com/zhifadongtai/2014/1022/639.html\"><p class=\"commonWidth_1000\"></p></a></li>");
//document.writeln("    <li class=\"pic3\"><a target=\"_blank\" href=\"http://zhifa.skinjc.com/zhifadongtai/2015/0108/642.html\"><p class=\"commonWidth_1000\"></p></a></li>");
//document.writeln("    <li class=\"pic2\"><a onclick=\"openZoosUrl();return false\" target=\"_self\" href=\"javascript:void(0);\"><p class=\"commonWidth_1000\"></p></a></li>");

document.writeln("  </ul>");
document.writeln("  <div class=\"btns\"></div>");
document.writeln("</div>");