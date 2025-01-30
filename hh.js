const prompt=require("prompt-sync")({sigint:true}); 

let name = prompt("What's your name");
console.log("hello"+name+"!");
