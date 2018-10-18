"use strict";
{
    const data={
        game:[
            'dancer',
        ],
        canvas:[
            'circle',
            'default',
            'moveCircle',
            'heart',
            'hacker',
            'chess',
        ],
        echarts:[
            'one',
            'two',
            'three',
        ],
    };
    let strAll=``;
    for(const attr in data){
        let strTitle=``;
        let strContent=``;
        if(data.hasOwnProperty(attr)){
            data[attr].forEach(v=>{
                strContent+=`<li><a href="${attr+'/'+v}">${v}</a></li>`;
            });
            strTitle=attr;
            strAll+=`<div>
                    <h2>${strTitle}</h2>
                    <ul>
                        ${strContent}                       
                    </ul>
                </div>`;
        }
    }
    document.querySelector('#container').innerHTML=strAll;
}
