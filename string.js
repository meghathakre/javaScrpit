let str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel adipisci reiciendis repudiandae atque esse quos expedita consequatur. Officia iure consequuntur quisquam nostrum reprehenderit voluptas nulla perferendis voluptatem illo saepe?"


// for (let i in str){
//     console.log(i);
// }
// let storestr="";
// for(let i of str){
//     if(i!=="i"){
//         storestr=storestr+i;
//     }
// }
// console.log(storestr);
// console.log(str.replaceAll(" ",""));
// console.log(str,length);
// console.log(str.replace(" ",""));




let a="";
for(let i in str){
    if(i>42 && i<60){
        if(str[i]!==" "){
            a=a+str[i];
        }
    }else{
        a=a+str[i];
    }
}
console.log(a);


let output =str.toUpperCase(str);
console.log(output);

let output1=str.toLowerCase(str);
console.log(output1);

console.log(str.trim());//aage or piche ki  extra space ko mitata hai

console.log(str.charCodeAt(0));//

console.log(str.charAt(78));
console.log(str.includes("Lorem"));
console.log(str.indexOf("L"));