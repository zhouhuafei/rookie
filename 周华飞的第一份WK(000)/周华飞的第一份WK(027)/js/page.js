var obj,j;
var page=0;
var nowPage=0;//��ǰҳ
var listNum=5;//ÿҳ��ʾ<div>��
var PagesLen;//��ҳ��
var PageNum=7;//��ҳ���ӽ���(7��)
onscroll=function(){
	obj=document.getElementById("content").getElementsByTagName("div");
	j=obj.length
	PagesLen=Math.ceil(j/listNum);
	upPage(0)
	
	var STmodel = new switchmodTag();
	STmodel.st(["a_1","a_2","a_3"],["c1_1","c1_2","c1_3"],"st01","st02");//��һ�鶯����
	STmodel.st(["b_1","b_2","b_3"],["c2_1","c2_2","c2_3"],"st01","st02");//�ڶ��鶯����
	STmodel.st(["c_1","c_2","c_3"],["c3_1","c3_2","c3_3"],"st01","st02");//�����鶯����
	//�������ӻ����Ÿ������븴�ƴ��룬ID�����������ϼ��ɡ�
	
}
function upPage(p){
	nowPage=p
	//���ݱ任
	for (var i=0;i<j;i++){
	obj[i].style.display="none"
	}
	for (var i=p*listNum;i<(p+1)*listNum;i++){
	if(obj[i])obj[i].style.display="block"
	}
	if (nowPage < 1) {
					
					strS='<a href="###" onclick="upPage('+(nowPage)+')">��һҳ</a>  '
				} else {
					
					strS='<a href="###" onclick="upPage('+(nowPage-1)+')">��һҳ</a>  '
				}
	var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
	var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
	var strC="",startPage,endPage;
	if (PageNum>=PagesLen) {startPage=0;endPage=PagesLen-1}
		else if (nowPage<PageNum_2){startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1}//��ҳ
	else {startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t}
	for (var i=startPage;i<=endPage;i++){
	 if (i==nowPage)strC+='<a href="###" style="color:red;font-weight:700;" onclick="upPage('+i+')">'+(i+1)+'</a> '
	 else strC+='<a href="###" onclick="upPage('+i+')">'+(i+1)+'</a> '
	}
	if (nowPage < PagesLen-1) {
					
					strE=' <a href="###" onclick="upPage('+(nowPage+1)+')">��һҳ</a>  '
				} else {
					
					strE=' <a href="###" onclick="upPage('+(nowPage)+')">��һҳ</a>  '
				}

	//strE2=nowPage+1+"/"+PagesLen+"ҳ"+"  ��"+j+"��"
	document.getElementById("page_navigation").innerHTML=strS+strC+strE;
}

function ajax_num(id, num){

		$("#pp_num").html('<script type="text/javascript" src="http://pj.skinjc.com/socket.php?id='+id+'&action=2"><\/script>');
		var n_num = $("#ajax_"+num).html();
		$("#ajax_"+num).html(parseInt(n_num)+1);
		$("#imgs_"+num).attr("onclick","");
	 
}
