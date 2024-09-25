let count=59;
let sec=0;
let minit=0;
const run=()=>{
    setInterval(timer ,100)
    setInterval(timer,100)
    setInterval(timer,100)
}
const timer=()=>{
    count=count-1;

    if(count>0){
        let selecth1 = document.querySelector('#output');
        selecth1.innerHTML=count;
    }

       
    minit=minit-1;
        if(count>0 ){
            let selecth1 = document.querySelector('#output1');
            selecth1.innerHTML=minit;
        }
        
            sec=sec-1;
        
            if(count>0 ){
                let selecth1 = document.querySelector('#output2');
                selecth1.innerHTML=sec;
            }
            
        }
        
    
    
