const alluser=[{
    firstName:"Tushar",
    gender:"Male",
},{
    firstName:"Raman",
    gender:"Male"
},{
    firstName:"Priya",
    gender:"Female"
}]

for(let i=0;i<alluser.length;i++){
    if(alluser[i]["gender"]=="Male"){
        console.log(alluser[i]["firstName"])
    }
}