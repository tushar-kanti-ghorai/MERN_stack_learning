//given an array,give me back all the even values from it
//normal

let arr=[1,2,3,4,5]
let newArray=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArray.push(arr[i])
    }
}

console.log(newArray)


//filter

let input=[1,2,3,4,5]
let ans=input.filter((n)=>{
    if(n%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(ans)