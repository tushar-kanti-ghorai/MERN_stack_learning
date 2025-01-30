const express=require('express');
const app=express();
app.use(express.json())
app.post('/data',(req,res)=>{
   const kidney=req.body.kidney;
   const kidneyLength=kidney.length;

   res.send('You have '+kidneyLength+' kidneys');

})

app.listen(3000,()=>{
    console.log("server is running....");
});