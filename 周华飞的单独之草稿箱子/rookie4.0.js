// JavaScript Document
/*********************************
 *�ܻ������� QQ:1123486116
 *rookie making
 *rookie Copyright
 *δ�������ֹ���ƺ͵���ΥȨ�ؾ�
**********************************/
//ǰ̨����:ʹ��ǰ��ʵ����Rookie��ֹaEle����
var fnR=function(_this){
	return	new Rookie(_this);
}
//rookie������
function Rookie(_this){
	//����һ�����������洢�ڵ�ͽڵ�����
	this.aEle=[];	
	if(_this){
		this.aEle[0]=_this;
		//return this;	//���ﲻ�÷���,��Ϊ����thisʱ==>fnR(this)�������صľ���new Rookie(_this)������;��������˷���ֵò��Ҳ�������,�д���֤...
	}
}	
//��ȡid�ڵ�
Rookie.prototype.getId=function(id){
	this.aEle.push(document.getElementById(id));
	return	this;
}
//��ȡtag�ڵ�
Rookie.prototype.getTag=function(tag){
	var aTag=document.getElementsByTagName(tag);
	for(var i=0;i<aTag.length;i++){
		this.aEle.push(aTag[i]);			
	}
	return this;	
}
//��ȡclass�ڵ�
Rookie.prototype.getClass=function(sClass,idArea){
	var oParent=null;
	if(arguments.length==2){
		oParent=document.getElementById(idArea);
	}else{
		oParent=document;	
	}
	var allEle=oParent.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<allEle.length;i++){
		if(re.test(allEle[i].className)){
			this.aEle.push(allEle[i]);	
		}
	}
	return this;
}
//���class
Rookie.prototype.addClass=function(sClass){
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<this.aEle.length;i++){
		if(!re.test(this.aEle[i].className)){
			this.aEle[i].className+=' '+sClass;			
		}	
	}
	return this;
}
//�Ƴ�class
Rookie.prototype.removeClass=function(sClass){
	var re=new RegExp('\\b'+sClass+'\\b','i');//var re=new RegExp('\\s|^'+sClass+'\\s|$','i');
	for(var i=0;i<this.aEle.length;i++){
		if(re.test(this.aEle[i].className)){
			this.aEle[i].className=this.aEle[i].className.replace(re,' ');		
		}	
	}
	return this;		
}
//��ȡĳһ���ڵ�
Rookie.prototype.getOne=function(num){
	var oOne=this.aEle[num];
	this.aEle=[];
	this.aEle[0]=oOne;
	return this;
}
//getStyle
Rookie.prototype.getStyle=function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];	
	}	
}
//����css
Rookie.prototype.css=function(attr,value){
	for(var i=0;i<this.aEle.length;i++){
		if(arguments.length==1){
			return this.getStyle(this.aEle[i],attr);	
		}
		this.aEle[i].style[attr]=value;			
	}
	return this;
}
//����html
Rookie.prototype.html=function(str){
	for(var i=0;i<this.aEle.length;i++){
		if(arguments.length==0){
			return this.aEle[i].innerHTML;	
		}
		this.aEle[i].innerHTML=str;			
	}
	return this;
}
//show��ʾ
Rookie.prototype.show=function(){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='block';		
	}
	return this;		
}
//hide����
Rookie.prototype.hide=function(){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='none';		
	}
	return this;		
}
//center����
Rookie.prototype.center=function(width,height){
	var iTop=(document.documentElement.clientHeight-height)/2;
	var iLeft=(document.documentElement.clientWidth-width)/2;	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.top=iTop+'px';
		this.aEle[i].style.left=iLeft+'px';
	}
	return this;
}
//hover�¼�����
Rookie.prototype.hover=function(fnOver,fnOut){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onmouseover=fnOver;
		this.aEle[i].onmouseout=fnOut;	
	}
	return this;		
}
//click�¼�����
Rookie.prototype.click=function(fn){		
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onclick=fn;		
	}
	return this;	
}
//resize�¼�����
Rookie.prototype.resize=function(fn){	
	for(var i=0;i<this.aEle.length;i++){
		var oEle=this.aEle[i];
		window.onresize=function(){
			if(fn){
				fn();
			}else{		//������װ�Ҿ�����ȫ�Ƕ��һ��,��Ϊ����ֱ��ʹ��center(width,height)��������,�û��������Ҫ�������ķ�װҪ�úܶ�;
				if(oEle.offsetLeft>fnR().getInner().width-oEle.offsetWidth){oEle.style.left=fnR().getInner().width-oEle.offsetWidth+'px';}
				if(oEle.offsetTop>fnR().getInner().height-oEle.offsetHeight){oEle.style.top=fnR().getInner().height-oEle.offsetHeight+'px';}
			}
		}
	}	
	return this;	
}
//��ȡ���������ڴ�С
Rookie.prototype.getInner=function(){
	if(window.innerWidth){
		return{
			width:window.innerWidth,	//firefoxΪ�˼��ݵͰ汾���,��Ϊ�Ͱ汾�����ʹ������ʱ,�᲻ȥ������������Ƕθ߶�,�ᵼ�����ֿ�ȱ
			height:	window.innerHeight	//firefox��������Ϊû��Ҫ�������ļ���,��Ϊ�Ͱ汾firefox���г�ռ��������Ӧ�ÿ��Ժ��Բ����˰�
		}	
	}else{
		return{			
			width:document.documentElement.clientWidth,		//ȫ������	�����ڵͰ汾���,���ε�����ʵ��ʱ,�����Сbug,���ֲ���ٸ���һ�ι������ľ���
			height:document.documentElement.clientHeight		//ȫ������
		}	
	}	
}
//lock�¼�����
Rookie.prototype.lock=function(){	
	for(var i=0;i<this.aEle.length;i++){
		//����Ϊ����ķ�װӦ��,�ȴ���һ��div,Ȼ�������һ��csstext����,����һ�������������¼�
		this.aEle[i].style.width=getInner().width+'px';
		this.aEle[i].style.height=getInner().height+'px';
		this.aEle[i].style.display='block';
		document.documentElement.style.overflow='hidden';	//���ع����� ��ֹ��������קʱ���ֲ㸲�ǲ���ȫ���ĵ�BUG----��Ȼ�����ק��������,Ҳ���Խ�����BUG 
	}								//���Ƕ���IE��˵,��Ȼȡ���˹�����,������Ȼ��������ֶϲ�����,���Խ������ק��������,�������������Ҫ��BUG
	return this;	
}
//unlock�¼�����
Rookie.prototype.unlock=function(){	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].style.display='none';
		document.documentElement.style.overflow='auto';		//����ȡ��ʱ ȡ����������ԭ��������Ĭ��״̬----��Ȼ�����ק��������,Ҳ���Խ�����BUG
	}
	return this;	
}
//drag�¼�����
Rookie.prototype.drag=function(){	
	for(var i=0;i<this.aEle.length;i++){
		this.aEle[i].onmousedown=function(ev){
			var ev=ev||event;
			var _this=this;				//this  ָ����this.aEle[i];
			var iDisX=ev.clientX-this.offsetLeft;		//this  ָ����this.aEle[i];
			var iDisY=ev.clientY-this.offsetTop;		//this  ָ����this.aEle[i];
			document.onmousemove=function(ev){
				var ev=ev||event;
				var iL=ev.clientX-iDisX;
				var iT=ev.clientY-iDisY;
				iL<=50&&(iL=0);				//50�Ǹ��ӵ�����Ч��(���п���,ֻ��Ϊ������û�����,���˸��ӵ�һ��С��Ч)
				if(iL>=fnR().getInner().width-_this.offsetWidth-50){iL=fnR().getInner().width-_this.offsetWidth;}
				iT<=50&&(iT=0);
				if(iT>=fnR().getInner().height-_this.offsetHeight-50){iT=fnR().getInner().height-_this.offsetHeight;}
				_this.style.left=iL+'px';		//_this  ָ����this.aEle[i];
				_this.style.top=iT+'px';		//_this  ָ����this.aEle[i];
			}
			document.onmouseup=function(){
				this.onmousemove=null;
				this.onmouseup=null;
				_this.releaseCapture&&_this.releaseCapture();
			}
			_this.setCapture&&_this.setCapture();
			ev.stopPropagation?ev.stopPropagation():ev.cancelBubble=true;
			ev.preventDefault?ev.preventDefault():ev.returnValue=false;		//��ֹĬ���¼��ᵼ���������Ч
		}	
	}
	return this;
}
//�¼���eventBind	�¼����Դ���׼����event�¼�  ��var ev=ev||event;
Rookie.prototype.eventBind=function(obj,ev,fn){			//���fn����һ����������,���Ǵ��ⲿ�����һ����������,����IE8���°汾�ᷢ��thisȡֵ��ͬ��BUG
	if(obj.attachEvent){						//���fn����һ����������==>�ᴥ������BUG
		obj.attachEvent('on'+ev,fn);				//ֱ��ʹ����������,Ĭ���ǿ��Ա�׼��event��,����������������ִ��fn����,�޷���׼��event(��ۿ���2��BUG)
	}else{								//1.thisȡֵ��ͬ,IE8����ȡ����window,��׼��ȡֵ�ǵ�ǰ�¼�Ԫ��(fn����һ����������,�Żᴥ����BUG)
		obj.addEventListener(ev,fn,false);			
	}
	return this;
}
//�¼���eventBind2	����ȫ�����������
Rookie.prototype.eventBind2=function(obj,ev,fn){			//�޷����������==>�޷�ʹ���������Ƴ��¼���==>IEִ��˳��ߵ�==>ִ�ж��ͬһ������������W3C�����,IE�������
	if(obj.attachEvent){						
		obj.attachEvent('on'+ev,function(){			//2.������������ʹ���¼�ð��,�����this��ֵ����,�����޷���׼��event
			fn.call(obj,window.event);			//ʹ���¼�ð��,���this��ֵ���޷���׼��event����(thisָ��obj,window.event�ǲ���)
		});						
	}else{								
		obj.addEventListener(ev,fn,false);			
	}
	return this;
}
//�Ƴ��¼���removeEvent1(����ʹ��,��������)
Rookie.prototype.removeEvent=function(obj,ev,fn){			//fn��������������,�����Ƴ���Ч���Ƴ��¼�
	if(obj.detachEvent){
		obj.detachEvent('on'+ev,fn);	
	}else{
		obj.removeEventListener(ev,fn,false);
	}
	return this;
}