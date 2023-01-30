const readline=require('readline-sync');
let row=parseInt(readline.question("Enter the Row :"));
// let row=4;
// let str="My name is kha";
let str=readline.question("Enter the String :");

let n=str.length;
let s="",k=0;

while(n>0){
for(let j=0;j<k;j++){
    s+="*";
}

for(let i=k;i<str.length;i=i+row){
  n--;
  
    if(str[i]==" "){
       
        for(let j=i+row; j<str.length; j=j+row){
           if(str[j]!=" "){
            s+='*';
            break;
           }
        }
    }
    else{
    s+=str[i];
    }
    
}

k++;
}
console.log(s);
