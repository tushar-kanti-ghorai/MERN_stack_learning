console.log("a");
console.log("b");

let timeout;
function t(){
clearTimeout(timeout)
timeout=setTimeout(function(){
    hello()
},5000)


}
function hello(){
    console.log("hii")
}

t();
t();
console.log("c")
