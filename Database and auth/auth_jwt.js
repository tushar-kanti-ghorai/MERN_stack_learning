const jwt=require("jsonwebtoken");

const value=({
    name:"Tushar",
    password:"123254"
})


const token=jwt.sign(value,"secreii");

const verified=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHVzaGFyIiwicGFzc3dvcmQiOiIxMjMyNTQiLCJpYXQiOjE3MzgzOTM1OTR9.al1259gvzXP43cm7D_qmVkT4wvtcbY0GgStz6P5F03g","secreii");

console.log(verified);

console.log(token);