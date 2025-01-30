const fs=require('fs')

fs.readFile("d:\\JavaScript\\Js_Async_awit_Promises\\a.txt","utf-8",function(err,data){
    console.log(data)
})

console.log("hi there")

let a=0;
for(let i=0;i<100000000;i++){
    a++;
}

console.log("After for loop")