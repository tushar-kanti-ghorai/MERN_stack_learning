const express=require('express');

const app=express();
function userMiddleware(req,res,next){
    const username=req.query.username;
    if(username != 'Tushar' || password!="pass"){
        res.status(400).json({
            msg:"wrong username and password"
        })
    }else{
        next();
    }
}


function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId
    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            msg:"wrong kidneyId"
        });
    }else{
        next();
    }
}




app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
    res.json({
        msg:'Your kidney is fine'
    })
})

app.listen(3000,()=>{
    console.log("Server is running");
})