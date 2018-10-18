// JavaScript Document

/*==切换==*/
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
/*=初始 页面加载100毫秒后执行 等同onload 为防止和分页冲突=*/
setTimeout("loadlist()",100)
function loadlist(){	
	/*==切换==*/
	var sm = new swc();
	sm.st("a3","b3");	
}