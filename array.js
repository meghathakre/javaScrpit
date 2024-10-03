let arr=[2,4,5,6,8,9];
// arr.pop();
// console.log(arr);

arr.push(80)
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(30);
console.log(arr);

delete arr[2];
console.log(arr);

arr.splice(1);
console.log(arr);

arr.splice(0,0,90)
console.log(arr);

arr.splice(arr.length-1,1);
console.log(arr)

arr.splice(arr.length,0,90,89,70);
console.log(arr);

arr.splice(3,0,"hello","hii")
console.log(arr);

arr.splice(6,1,"delete element");
console.log(arr);


let arr1=[10,7,80,5,6,8];
arr1.sort(function(a,b){return a-b});
console.log(arr1);

arr.sort(function(a,b){return b-a})
console.log(arr);

let sumofarray= arr.reduce(function(a,b){return a+b});
console.log(sumofarray);


let ar=[12,13,15,6,7];
let ar1=[114,2,4,7,9];
let strarry=ar.toString();
console.log(strarry);

let concatearray=arr.concat(ar1);
console.log(concatearray);

let joinarray=ar.join("");
console.log(joinarray);
