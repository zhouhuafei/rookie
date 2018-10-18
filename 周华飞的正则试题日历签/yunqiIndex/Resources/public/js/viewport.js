/**
 * Created by wangtengteng on 2015/11/26.
 */
var meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('id', 'viewport');
meta.setAttribute('content', 'target-densitydpi=device-dpi,width=640, user-scalable=no');
document.head.appendChild(meta);
var fixViewport = function(){
    var phoneWidth =  parseInt(window.screen.width);
    var phoneScale = phoneWidth/640;
    var ua = navigator.userAgent;
    var dpi =  640 / phoneWidth * window.devicePixelRatio * 160;
    if (/Android.*?(\d+\.\d+)/.test(ua)){
        var version = parseFloat(RegExp.$1);
        if(version<=2.3){
            document.getElementById('viewport').content = 'width=640, target-densitydpi='+dpi;
        } else {
            document.getElementById('viewport').content = 'width=640, user-scalable=no, target-densitydpi='+dpi;
        }
    }
}
fixViewport();

