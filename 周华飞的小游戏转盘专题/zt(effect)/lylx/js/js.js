//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
var r=new Rookie();
r.addEvent(window,'load',function(){
	r.tabSwitch({oParent:"#section"});
	r.scrollAddActive('#content');
	r.f5(r.scrollAddActive('#content'));
	// 百度地图
	(function(){
		var map = new BMap.Map("l-map");
		map.centerAndZoom(new BMap.Point(121.536567, 31.280419),11);
		var local = new BMap.LocalSearch(map, {
			renderOptions: {map: map, panel: "r-result"}
		});
		local.search("上海江城皮肤病医院");		
	})();
})