/**
 * Created by zhouhuafei on 4/4/16.
 */
var rookie={};
rookie.ajax=function(opt){
        var obj=opt||{};
        obj.method=obj.method||'get';//默认get方式
        obj.url=obj.url||'';
        obj.async=obj.async||true;//默认异步
        obj.data=obj.data||'';//默认数据为空
        obj.type=obj.type||'json';//默认返回obj格式
        obj.success=obj.success||function(){console.log('大兄弟你忘了写成功的回调函数')};//默认是空函数
        obj.fail=obj.fail||function(){console.log('大兄弟你忘了写失败的回调函数')};//默认是空函数
        var ajax=new XMLHttpRequest();
        if(!obj.url){
                console.log('大兄弟,你的url没有填写');
                return false;
        }
        ajax.onreadystatechange=function(){
                if(this.readyState==4){
                        if(this.status==200){
                                if(obj.type=='json'){
                                        var json=JSON.parse(this.responseText);
                                        obj.success(json);
                                }else{
                                        obj.success(this.responseText);
                                }
                        }else{
                                obj.fail(this.status);
                        }
                }
        };
        if(obj.data){
                var data=[];
                for(var  attr in obj.data){
                        data.push(attr+'='+obj.data[''+attr+'']);
                }
                var sData=data.join('&');
        }else{
                console.log('大兄弟,你的data没有填写,或者填写的格式错误,如果你只是单纯的获取一个json文件,那么不写也可以');
        }
        if(obj.method.toLowerCase()=='get'){
                ajax.open(obj.method,obj.url+'?t='+new Date().getTime()+'&'+sData,obj.async);
                ajax.send(null);
        }else if(obj.method.toLowerCase()=='post'){
                ajax.open(obj.method,obj.url,obj.async);
                ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                ajax.send(sData);
        }else{
                console.log('大兄弟,这里支持之post和get方式,你是不是写错单词了');
        }
};