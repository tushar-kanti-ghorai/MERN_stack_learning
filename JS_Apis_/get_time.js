let currentdate=new Date()
console.log("Time in millisceond sice 1970"+currentdate.getTime())


function calculated(){
let a=0;
for(let i=0;i<100000000;i++){
  a=a+i;
}
return a;
}

let beforeDate=new Date()
let beforeTimeinMs=beforeDate.getTime()
console.log(beforeTimeinMs)
calculated()

let afterDate=new Date()
let aftertimeinMs=afterDate.getTime()
console.log(aftertimeinMs)

console.log(aftertimeinMs-beforeTimeinMs)