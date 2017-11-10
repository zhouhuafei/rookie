/**
 * Created by Administrator on 2015/8/25.
 */
define(function(require,exports,module){
        require('super.js');
        exports.main=function(){
                $(window).load(function(){
                        jQuery(".therapy").slide({mainCell:"ul",titCell:"ol li",effect:"fold",autoPlay:true});
                        jQuery("#box4s").slide({mainCell:"#b1",titCell:"#a1 li",effect:"fold",autoPlay:true});
                        jQuery("#box4ss").slide({mainCell:"#b2",titCell:"#a2 li",effect:"fold",autoPlay:true});
                        jQuery("#box4sss").slide({mainCell:"#b3",titCell:"#a3 li",effect:"fold",autoPlay:true});
                        jQuery(".box7_1").slide({mainCell:"ul",effect:"fold"});
                        $(function(){
                                $('#HospitalCon dl').find('dd').eq(0).addClass('active');
                                $("#HospitalNav ul li").each(function(index){
                                        $(this).hover(function(){
                                                $("#HospitalNav ul li").removeClass('select');
                                                $(this).addClass('select');
                                                $('#HospitalCon dl').eq(index).show().siblings().hide();
                                                $('#HospitalCon dl').find('dd').removeClass('active');
                                                $('#HospitalCon dl').eq(index).find('dd').addClass('active');
                                        });
                                });
                        });
                        $('#pfCenter').css('background','url("swtcenter.gif") no-repeat');
                })
        }
})
