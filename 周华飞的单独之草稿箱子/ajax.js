// JavaScript Document
function ajax(url, fnSucc, fnFail)
{
	//1.����ajax����
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}	
	//2.���ӷ�����(�򿪺ͷ�����������)
	oAjax.open('GET', url, true);	
	//3.����
	oAjax.send(null);	
	//4.����
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