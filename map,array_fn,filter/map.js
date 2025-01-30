//Given an array ,give me a back new array in which every value multiplited by 2
//ex:-[1,2,3,4,5]->becomes-> [2,4,6,8,10]
//normal

const arr=[1,2,3,4,5]
const newArray=[]
for(let i=0;i<arr.length;i++){
     newArray.push(arr[i]*2)
}

console.log(newArray)



//map

const input=[1,2,3,4,5]
const ans=input.map((n)=>{
    return n*2;
})

console.log(ans)