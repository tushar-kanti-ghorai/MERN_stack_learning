function add(a,b,calculate){
    return calculate(a,b)//
}

function sum(a,b){
    return a+b;
}

let result=add(5,3,sum)
console.log(result)