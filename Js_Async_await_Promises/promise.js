
let a=new Promise(function(resolve){
    resolve("hi tushar")
})

// function callbacks(){
//     console.log(a)
// }

// a.then(callbacks)

a.then(function(){
    console.log(a)
})


