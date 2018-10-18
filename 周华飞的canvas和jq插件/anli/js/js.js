//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
$(function () {
        collapse($('section mark'), $('section article'), $('section div'));
});
function collapse(aBtn, aCut,aDiv) {
        aBtn.each(function (index) {
                aBtn.get(index).currentH = aCut.eq(index).outerHeight();
                aBtn.eq(index).click(function () {
                        if (aBtn.eq(index).attr('class') == 'on') {
                                aDiv.eq(index).stop().animate({'height': 0});
                                aCut.eq(index).stop().animate({'height': 0}, function () {
                                        aBtn.eq(index).find('img').attr('src', 'images/show.jpg');
                                        aBtn.eq(index).attr('class', '');
                                });
                        } else {
                                aDiv.eq(index).stop().animate({'height': aBtn.get(index).currentH});
                                aCut.eq(index).stop().animate({'height': aBtn.get(index).currentH}, function () {
                                        aBtn.eq(index).find('img').attr('src', 'images/hide.jpg');
                                        aBtn.eq(index).attr('class', 'on');
                                });
                        }
                });
        });
}