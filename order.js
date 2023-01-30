const input = require(`readline-sync`)

let n = input.question("Enter the array length : ");
let arr=[]
for(let j=0;j<n;j++){
    arr[j] = input.question("Enter the array elements : ")
}
arr.sort((a,b)=> a-b);
let res =arr[0];
let i=1;

for(i;i<arr.length-1;i+=2){
    res += ` < ${arr[i+1]}` + ` > ${arr[i]}`
}

if(arr.length%2==0){
    res += ` > ${arr[arr.length-1]}`
    console.log(res);}
else{    
console.log(res)
}




































// // let left = [];
// // let right = [];
// let res = ""+x[0]
// for(let i=1;i<x.length;i++){
//     if(i%2==0){
//         left.push(x[i])
//     }
//     else{
//         right.push(x[i])
//     }
// }
// console.log(left);
// console.log(right);
// // for(i=0;i<left.length;i++){
// //     res += `< ${left[i]}`
// //     for(i=0;i<right.length;i++){
// //         res
// //     }

// // }
// console.log(res);