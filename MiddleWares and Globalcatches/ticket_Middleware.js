const express=require('express');
const app=express();

function middlewareAge(req,res,next){
   const age=req.query.age;
   if(age>14){
    next();
   }else{
    res.json({
        msg:" Sorry You are not of age yet"
    })
   }
}

app.use(middlewareAge);

app.get('/ride1',function(req,res){
    res.json({
        msg:"You have successfully riden the ride1",
    })

})


app.get('/ride2',function(req,res){
    res.json({
        msg:"You have successfully riden the ride2",
    })
    
})


app.listen(3000);
