let count=0;
let storestr="";
let str="We are developer";


const typewriter=()=>{
setInterval(run,100);
}

const run=()=>{
    let select=document.querySelector("#output");
  
        storestr=storestr+str[count];
        select.innerHTML=storestr;
        count++;
    if(count>str.length-1){
        count=0;
        storestr="";
    }
    
   

}
console.log(4+true);

