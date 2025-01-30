const jwt=require("jsonwebtoken");

const value=({
    name:"Tushar",
    password:"123254"
})


// const token=jwt.sign(value,"secret");

const verified=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHVzaGFyIiwicGFzc3dvcmQiOiIxMjMyNTQiLCJpYXQiOjE3MjIyMjk3MDV9.ncLhzjwTpEHGE-QXBVMCX_SRdDhf1LknsB2Q_vFn1ZY","secret");

console.log(verified);

// console.log(token);