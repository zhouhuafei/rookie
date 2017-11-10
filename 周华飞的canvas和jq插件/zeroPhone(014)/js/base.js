//JavaScript Document
/*html*/
(function(win,doc){
        var oContainer=doc.getElementById('container');
        var oHtml=doc.getElementsByTagName('html')[0];
        fnResetHtmlFontSize();
        function fnResetHtmlFontSize(){
                var iContainerWidth=oContainer.offsetWidth;
                oHtml.style.fontSize=iContainerWidth/10+'px';
                console.log(iContainerWidth,oHtml.style.fontSize);
        }
        window.addEventListener('resize',fnResetHtmlFontSize,false);
})(window,document);