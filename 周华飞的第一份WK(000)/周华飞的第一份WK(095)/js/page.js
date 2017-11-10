// JavaScript Document
var obj,j;
var page=0;
var nowPage=0;//当前页
var listNum=6;//每页显示<div>数
var PagesLen;//总页数
var PageNum=7;//分页链接接数(7个)
/*window.onload*/
onload=function(){
	obj=document.getElementById("content").getElementsByTagName("div");
	j=obj.length
	PagesLen=Math.ceil(j/listNum);
	upPage(0)
	var STmodel = new switchmodTag();
	STmodel.st(["a_1","a_2","a_3","a_4","a_5","a_6","a_7","a_8"],["c1_1","c1_2","c1_3","c1_4","c1_5","c1_6","c1_7","c1_8"],"st01","st02");//第一组动滑轮
    	STmodel.st(["b_1","b_2","b_3","b_4","b_5","b_6","b_7","b_8","b_9"],["c2_1","c2_2","c2_3","c2_4","c2_5","c2_6","c2_7","c2_8","c2_9"],"st01","st02");//第二组动滑轮
	//如需增加滑动门个数，请复制代码，ID命名规则如上即可。
}
/*upPage*/
function upPage(p){
	nowPage=p
	//内容变换
	for (var i=0;i<j;i++){
		obj[i].style.display="none"
	}
	for (var i=p*listNum;i<(p+1)*listNum;i++){
		if(obj[i])obj[i].style.display="block"
	}
	if (nowPage < 1){					
		strS='<a href="###" onclick="upPage('+(nowPage)+')">上一页</a>  '
	}else{
		
		strS='<a href="###" onclick="upPage('+(nowPage-1)+')">上一页</a>  '
	}
	var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
	var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
	var strC="",startPage,endPage;
	if (PageNum>=PagesLen){
		startPage=0;endPage=PagesLen-1
	}else if(nowPage<PageNum_2){//首页
		startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1
	}else{
		startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
	}
	for (var i=startPage;i<=endPage;i++){
		if(i==nowPage){
			strC+='<a href="###" style="color:red;font-weight:700;" onclick="upPage('+i+')">'+(i+1)+'</a>';
		}else{
			strC+='<a href="###" onclick="upPage('+i+')">'+(i+1)+'</a>';
		}
	}
	if (nowPage < PagesLen-1){					
		strE=' <a href="###" onclick="upPage('+(nowPage+1)+')">下一页</a> ';
	}else{					
		strE=' <a href="###" onclick="upPage('+(nowPage)+')">下一页</a> ';
	}
	//strE2=nowPage+1+"/"+PagesLen+"页"+"  共"+j+"条"
	document.getElementById("page_navigation").innerHTML=strS+strC+strE;
}
/*ajax_num*/
function ajax_num(id, num){
		$("#pp_num").html('<script type="text/javascript" src="http://pj.skinjc.com/socket.php?id='+id+'&action=2"><\/script>');
		var n_num = $("#ajax_"+num).html();
		$("#ajax_"+num).html(parseInt(n_num)+1);
		$("#imgs_"+num).attr("onclick","");	 
}