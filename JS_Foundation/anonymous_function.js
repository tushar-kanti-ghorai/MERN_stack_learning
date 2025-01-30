function sumofsomething(a,b,fn){
console.log
let var1=fn(a);
let var2=fn(b);
return var1+var2;
}


let result=sumofsomething(2,3,function(n){return n*n})
console.log(result)