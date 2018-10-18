//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
window.onload=function(){
	waterfall('#waterfall');
}
/*waterfall*/
function waterfall(obj){
	if(typeof obj=='string'){var obj=document.querySelector(obj);}
	var bTrue=true;
	var showData=5;//一次加载的数量
	var iNowScroll=1;//加载了几次
	/*ajax创建数据初始化*/
	ajax('js/data.json',function(str){
		var data=JSON.parse(str);//tata.json里的数据必须全部用双引号引起来,否则会一直报错,坑爹(数字类型除外)
		//console.log(data)
		for(var i=0;i<showData;i++){
			var oLi=document.createElement('li');
			oLi.innerHTML='<img src='+data.src[i%data.src.length]+' title='+data.title[i%data.src.length]+' />';
			obj.appendChild(oLi);
		}
		waterStyle();
	},function(str){
		alert('错误代码:'+str);
	})
	/*scroll滚动时加载数据*/
	window.addEventListener('scroll',function(){
		var aLi=obj.querySelectorAll('li');
		var iLen=aLi.length;
		//console.log(iLen);
		var iScroll=document.documentElement.scrollTop||document.body.scrollTop;
		var iViewHeight=document.documentElement.clientHeight;
		if(offset(aLi[iLen-1]).top<=iScroll+iViewHeight&&bTrue){
			bTrue=false;
			alert('数据开始加载第'+iNowScroll+'次')
			ajax('js/data.json',function(str){
				var data=JSON.parse(str);//tata.json里的数据必须全部用双引号引起来,否则会一直报错,坑爹(数字类型除外)
				//console.log(data)
				/*一次加载showData条数据*/
				for(var i=0;i<showData;i++){
					var oLi=document.createElement('li');
					oLi.innerHTML='<img src='+data.src[i+showData*iNowScroll]+' title='+data.title[i+showData*iNowScroll]+' />';
					obj.appendChild(oLi);
				}
				waterStyle();
				if(aLi.length<data.src.length-showData){iNowScroll++;bTrue=true;}else{alert('数据已经全部加载完毕')}
			},function(str){
				alert('错误代码:'+str);
			})	
		}
	},false)
	/*waterStyle瀑布流样式*/
	function waterStyle(){			
		var aLi=obj.querySelectorAll('li');
		var iHeight={zer:[],one:[],two:[],thr:[]};	
		var step=function(str){
			iHeight[str].push(aLi[i].offsetHeight);
			var iStep=Math.floor(i/4);
			if(!iStep/*iStep==0*/){
				aLi[i].style.top=0;
			}else{
				var iSum=0;
				for(var j=0;j<iStep;j++){
					iSum+=iHeight[str][j]+10;
				}
				aLi[i].style.top=iSum+'px';
			}					
		}
		for(var i=0;i<aLi.length;i++){
			var iRemainder=i%4;
			switch(iRemainder){
				case iRemainder=0:
				aLi[i].style.left='0.8%';
				step('zer');
				break;	
				case iRemainder=1:
				aLi[i].style.left='25.6%';
				step('one');
				break;	
				case iRemainder=2:
				aLi[i].style.left='50.4%';
				step('two');
				break;	
				case iRemainder=3:
				aLi[i].style.left='75.2%';
				step('thr');
				break;
			}	
		}
		//console.dir(iHeight);
	}	
}
/*ajax*/
function ajax(url,fnSucc,fnFail){
	var oAjax=new XMLHttpRequest();
	oAjax.open('GET',url+'?t='+new Date().getTime(),true);
	oAjax.send(null);
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail(oAjax.status);
			}	
		}	
	}
}
/*offset*/
function offset(obj){
	if(typeof obj=='string'){var obj=document.querySelector(obj);}
	var left=0;
	var top=0;
	while(obj){
		left+=obj.offsetLeft;
		top+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return{left:left,top:top}
}