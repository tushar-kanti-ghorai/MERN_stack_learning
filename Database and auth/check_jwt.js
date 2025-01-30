const jwt=require("jsonwebtoken");
const express=require("express");
const jwtPassword="12345";

const app=express();

app.use(express.json());

const allUsers=[{
    username:"Tushar",
    password:"124",
    name:"Tushar Kanti Ghorai"
},
{
    username:"Abhijit",
    password:"789",
    name:"Abhijit Ghorai"
},
{
    username:"Rahul",
    password:"667",
    name:"Rahul Maity"
}]


// function check(username,password){
//     let user=false;

//     for(let i=0;i<allUsers.length;i++){
//         if(allUsers[i].username==username && allUsers[i].password==password){
//             user=true;
//             return user;
//         }
//     }
//     return user;
// }

function check(username,password){
          let user=false
    allUsers.filter(function(val){
        if(val.username==username && val.password==password){
            user=true;
        }

       
    })

 return user;
}



app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(!check(username,password)){
        return res.status(403).json({
            msg:"user doen not exist"
        })

    }
    
    var token=jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
    
})


app.get('/users',(req,res)=>{
    const token=req.headers.authorization
    try{
    const decode=jwt.verify(token,jwtPassword);
    const username=decode.username;
   res.json({
    users:allUsers.filter(function(value){
        if(value.username==username){
            return false
        }else{
            return true
        }
    })
   })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        })
    }

})

app.listen(3000,(req,res)=>{
    console.log("server is running");
});

