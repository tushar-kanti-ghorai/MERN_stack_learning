const express=require('express');
const app=express();
app.use(express.json())
app.post('/data',(req,res)=>{
   const kidney=req.body.kidney;
   const kidneyLength=kidney.length;

   res.send('You have '+kidneyLength+' kidneys');

})

app.use(function(err,req,res,next){
    res.send("something went wrong");
})



app.listen(3000,()=>{
    console.log("server is running....");
});