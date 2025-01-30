const express=require('express');
const {createTodo, updateTodo}=require("./type")
const {todo}=require("./db")
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
const createPayload=req.body;
const parsePayload=createTodo.safeParse(createPayload);
if(!parsePayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs"
    })
    return;
}
//put it in mongodb
await todo.create({
 title:createPayload.title,
 description:createPayload.description,
 completed:false
})

res.json({
    msg:"Todo created"
})
})

app.get("/todos",async function(req,res){
const todos= await todo.find({})
res.json({
    todos
})
})

app.put("/completed", async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    
    await todo.updateMany({
        _id:req.body.id
    },{
        completed:true
    })
   res.json({
    msg:"Todo marked as completed"
   })
})

app.listen(3000);