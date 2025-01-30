const express=require("express");
const app=express();

app.get("/interest",(req,res)=>{
    const principle=parseInt(req.query.principle);
    const rate=parseInt(req.query.rate);
    const time=parseInt(req.query.time);

    const interest=(principle*rate*time)/100;
    const total=interest+principle;
    res.send({
       Total:total,
       Interest:interest

    })                  

})

app.listen(3000)