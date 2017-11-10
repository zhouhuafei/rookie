//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
laydate({
        elem: '#time',
        event: 'focus'
});
$(function(){
        var bName=false;
        var bTime=false;
        var bTel=false;
        var oParent=$('#guahao');
        var oForm=oParent.find('form');
        var oName=$('#name');
        var oTime=$('#time');
        var oTel=$('#tel');
        var oSubmit=oParent.find('.fr').find('input');
        var oHint=oParent.find('.guahao-title');
        var sHint=oHint.html();
        oForm.get(0).reset();
        /*验证姓名*/
        oName.blur(function(){
                var str=$(this).val().replace(/(^\s+)|(\s+$)/g,'');
                if(str==''){
                        fail('请输入您的姓名');
                        bName=false;
                }else{
                        if(/^[\u4e00-\u9fa5A-Za-z]*$/.test(str)){
                                bName=true;
                                def();
                        }else{
                                fail('请输入正确的姓名格式');
                                bName=false;
                        }
                }
                success();
        });
        /*验证就诊时间*/
        oTime.blur(function(){
                var $this=$(this);
                setTimeout(function(){
                        if($this.val()==''){
                                fail('请选择您的就诊时间');
                                bTime=false;
                        }else{
                                var arr=$this.val().split('-');
                                var now=new Date();
                                var year=now.getFullYear();
                                var moonth=now.getMonth()+1;
                                var data=now.getDate();
                                if(year<=arr[0]&&moonth<=arr[1]&&data<=arr[2]){
                                        bTime=true;
                                        def();
                                }else{
                                        fail('时间有误');
                                        bTime=false;
                                }
                        }
                        success();
                },200);
        });
        /*验证电话*/
        oTel.blur(function(){
                var str=$(this).val().replace(/^(\s+)|(\s+)$/,'');
                if(str==''){
                        fail('手机号码为必填项');
                        bTel=false;
                }else{
                        if(/^(13|14|15|18)[0-9]{9}$/.test($(this).val())){
                                bTel=true;
                                def();
                        }else{
                                fail('请填入您正确的手机号码');
                                bTel=false;
                        }
                }
                success();
        });
        oSubmit.click(function(){
                if(!bName){
                        var sName=oName.val().replace(/(^\s+)|(\s+$)/g,'');
                        if(sName==''){
                                fail('请输入您的姓名');
                        }else{
                                fail('请输入正确的姓名格式');
                        }

                }else if(!bTime){
                        if(oTime.val()==''){
                                fail('请选择您的就诊时间');
                        }else{
                                fail('时间有误');
                        }
                }else if(!bTel){
                        var sTel=oTel.val().replace(/^(\s+)|(\s+)$/,'');
                        if(sTel==''){
                                fail('手机号码为必填项');
                        }else{
                                fail('请填入您正确的手机号码');
                        }
                }
                if(!bName||!bTime||!bTel){
                        return false;
                }
        });
        function fail(value){
                oHint.html(value);
                oHint.removeClass('guahao-green');
                oHint.addClass('guahao-red');
        }
        function success(){
                if(bName&&bTime&&bTel){
                        oHint.html('必填项已经填写完毕,可以进行提交了');
                        oHint.removeClass('guahao-red');
                        oHint.addClass('guahao-green');
                }
        }
        function def(){
                oHint.html(sHint);
                oHint.removeClass('guahao-red');
                oHint.removeClass('guahao-green');
        }
});