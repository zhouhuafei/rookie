// JavaScript Document
function ajax(url, fnSucc, fnFail)
{
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	//2.连接服务器(打开和服务器的连接)
	oAjax.open('GET', url, true);	
	//3.发送
	oAjax.send(null);	
	//4.接收
	oAjax.onreadystatechange=function (){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFail){
					fnFail(oAjax.status);
				}
			}
		}
	};
}