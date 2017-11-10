$(function(){
    //�����ͳ�ʼ����ͼ������
    function initMap(){
        createMap();//������ͼ
        setMapEvent();//���õ�ͼ�¼�
        addMapControl();//���ͼ��ӿؼ�
        addMarker();//���ͼ�����marker
    }
    
    //������ͼ������
    function createMap(){
        var map = new BMap.Map("dituContent");//�ڰٶȵ�ͼ�����д���һ����ͼ
        var point = new BMap.Point(108.308664,22.86666);//����һ�����ĵ�����
        map.centerAndZoom(point,18);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
        window.map = map;//��map�����洢��ȫ��
    }
    
    //��ͼ�¼����ú�����
    function setMapEvent(){
        map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
        map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
        map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
        map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
    }
    
    //��ͼ�ؼ���Ӻ�����
    function addMapControl(){
                        }
    
    //��ע������
    var markerArr = [{title:"������ɽҽԺ",content:"�����а������28��<br/>�绰��0771-3115888<br/>��ַ��www.0771fuke.cn",point:"108.308421|22.866552",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
		 ];
    //����marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //����InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //����һ��Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//�����ͳ�ʼ����ͼ
});