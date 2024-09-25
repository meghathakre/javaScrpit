let count=0;
const run=()=>{
    setInterval(timer ,100)
}
const timer=()=>{
    count=count+1;
    if(count<70){
        let selecth1 = document.querySelector('#output');
        selecth1.innerHTML=count;
    }
}