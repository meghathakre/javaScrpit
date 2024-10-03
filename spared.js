let obj={
    "name":"megha",
    "age":27,
    "mobile":934534534
}

let obj1={
    "name":"megha",
    "age":27,
    "mobile":934534534
};
let result={
    ...obj,
    ...obj1
}
console.log(result);//kisi existent obj ko run time pr excist krne ke liye spread ka use krte hai

let name=document.querySelector('#name').value ;
let age=document.querySelector('#age').value;
let mobile=document.querySelector('#mobile').value;

let obj2={
    "name":"",
    "age":"",
    "mobile":""
}
