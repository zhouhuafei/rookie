"use strict";
self.onmessage=function(e){
    const init=0;
    const first=11;
    const all=e.data;
    const result=all/3;
    const arr=[];
    for(let i=init;i<=result;i++){
        for(let j=init;j<=result;j++){
            if(first+i+j!=result){
                continue;
            }
            for(let k=init;k<=result;k++){
                for(let l=init;l<=result;l++){
                    for(let m=init;m<=result;m++){
                        if(k+l+m!=result){
                            continue;
                        }
                        for(let n=init;n<=result;n++){
                            for(let x=init;x<=result;x++){
                                for(let y=init;y<=result;y++){
                                    if(n+x+y!=result){
                                        continue;
                                    }
                                    if(first+i+j+k+l+m+n+x+y==all){
                                        //第8个最多为result个,当第8个为result个时,可能的排列为以下打印出来的结果
                                        if(x!=result){
                                            continue;
                                        }
                                        arr.push([first,i,j,k,l,m,n,x,y]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    self.postMessage(arr);
};