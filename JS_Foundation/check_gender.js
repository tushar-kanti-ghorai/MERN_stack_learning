const check=[
    {
        person:"Tushar",
        gender:"male"
    },
    {
        person:"Abhi",
        gender:"male"
    },
    {
        person:"priya",
        gender:"female"
    }
]


for(i=0;i<check.length;i++){
  if(check[i]["gender"]=="male"){
    console.log(check[i]["person"]+" = "+check[i]["gender"])
  }else{
    console.log(check[i]["person"]+" = "+check[i]["gender"])
  }

}


