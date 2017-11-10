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
        /*��֤����*/
        oName.blur(function(){
                var str=$(this).val().replace(/(^\s+)|(\s+$)/g,'');
                if(str==''){
                        fail('��������������');
                        bName=false;
                }else{
                        if(/^[\u4e00-\u9fa5A-Za-z]*$/.test(str)){
                                bName=true;
                                def();
                        }else{
                                fail('��������ȷ��������ʽ');
                                bName=false;
                        }
                }
                success();
        });
        /*��֤����ʱ��*/
        oTime.blur(function(){
                var $this=$(this);
                setTimeout(function(){
                        if($this.val()==''){
                                fail('��ѡ�����ľ���ʱ��');
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
                                        fail('ʱ������');
                                        bTime=false;
                                }
                        }
                        success();
                },200);
        });
        /*��֤�绰*/
        oTel.blur(function(){
                var str=$(this).val().replace(/^(\s+)|(\s+)$/,'');
                if(str==''){
                        fail('�ֻ�����Ϊ������');
                        bTel=false;
                }else{
                        if(/^(13|14|15|18)[0-9]{9}$/.test($(this).val())){
                                bTel=true;
                                def();
                        }else{
                                fail('����������ȷ���ֻ�����');
                                bTel=false;
                        }
                }
                success();
        });
        oSubmit.click(function(){
                if(!bName){
                        var sName=oName.val().replace(/(^\s+)|(\s+$)/g,'');
                        if(sName==''){
                                fail('��������������');
                        }else{
                                fail('��������ȷ��������ʽ');
                        }

                }else if(!bTime){
                        if(oTime.val()==''){
                                fail('��ѡ�����ľ���ʱ��');
                        }else{
                                fail('ʱ������');
                        }
                }else if(!bTel){
                        var sTel=oTel.val().replace(/^(\s+)|(\s+)$/,'');
                        if(sTel==''){
                                fail('�ֻ�����Ϊ������');
                        }else{
                                fail('����������ȷ���ֻ�����');
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
                        oHint.html('�������Ѿ���д���,���Խ����ύ��');
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