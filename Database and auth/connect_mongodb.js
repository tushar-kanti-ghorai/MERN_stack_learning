//save the user data in database
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://tusharkantighorai643:vtesS9groCF9eTf9@cluster0.r6lixqm.mongodb.net/user_new");

//define the data
const user=mongoose.model("newUser",{name:String,email:String,password:String});

//declare the data
const user_app=new user({
    name:"Abhi",
    email:"abhi123@gmail.com",
    password:"1234"
})

//save until the logout or delete
user_app.save();