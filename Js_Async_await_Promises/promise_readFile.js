const fs=require('fs')

function readFile(){
    console.log("before promise")
    return new Promise(function(resolve){
        fs.readFile("d:\\JavaScript\\Js_Async_await_Promises\\a.txt","utf-8",function(err,data){
            console.log("Before resolve")
            resolve(data)
            console.log("After resolve")
        })
    })
}



function ondone(data){
    console.log(data)
}

// readFile().then(ondone)

let a=readFile()
console.log(a)
a.then(ondone)

console.log("kkk");

