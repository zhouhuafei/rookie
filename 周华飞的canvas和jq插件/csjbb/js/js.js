//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
window.addEventListener('load', function () {
        var aVideo = document.getElementsByClassName('video');
        var iLen = aVideo.length;
        for (var i = 0; i < iLen; i++) {
                aVideo[i].index = i;
                aVideo[i].addEventListener('click', function () {
                        var self = this;
                        var iW = this.offsetWidth;
                        var iH = this.offsetHeight;
                        var obj = '{\
                                "vid":' + this.dataset.vid + ',\
                                "width":' + iW + ',\
                                "height":' + iH + '\
                        }';
                        this.innerHTML = '<iframe name="iframe' + this.index + '" height="' + iH + '" width="' + iW + '" src="video.html" frameborder="0" scrolling="no"></iframe>';
                        setTimeout(function () {
                                window['iframe' + self.index].postMessage(obj, 'http://localhost:63342');
                        }, 100);
                }, false);
        }
        TouchSlide({slideCell: "#first"});
}, false);