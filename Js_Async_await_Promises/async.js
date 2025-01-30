function calsum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}


function findtill100(){
    console.log(calsum(100))
}

function synchSleep(){
    let a=0;
    for(let i=0;i<1000000000;i++){
        a++;
    }
}

// synchSleep()//synchronous
// findtill100()
setTimeout(findtill100,1000)//after 1 second it wll be execute and it is asynchronous
console.log("hello")