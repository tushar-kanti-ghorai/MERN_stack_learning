const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://tusharkantighorai643:vtesS9groCF9eTf9@cluster0.r6lixqm.mongodb.net/todos")
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}