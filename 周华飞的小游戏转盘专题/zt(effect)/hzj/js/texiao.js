// JavaScript Document

/*==�л�==*/
function swc(){}
swc.prototype = {
	st : function(menus,divs){
	var a = document.getElementById(menus).children;
	var b = document.getElementById(divs).children;
		for(i=0;i<a.length;i++){
			a[i].value=i;
			a[i].onmouseover= function(){
				for(j=0;j<a.length;j++){
					a[j].className="";
					b[j].style.display="none";
				}
				this.className="hover";
				b[this.value].style.display="block";
			}
		}
	},
	$ : function(oid){
		if(typeof(oid) == "string")
		return document.getElementById(oid);
		return oid;
	}
}
/*=��ʼ ҳ�����100�����ִ�� ��ͬonload Ϊ��ֹ�ͷ�ҳ��ͻ=*/
setTimeout("loadlist()",100)
function loadlist(){	
	/*==�л�==*/
	var sm = new swc();
	sm.st("a3","b3");	
}