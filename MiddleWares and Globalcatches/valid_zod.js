const zod=require('zod');

function validInput(obj){
const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
})

const response=schema.safeParse(obj)
console.log(response);
}

validInput({
    email:"tushar@gmil.com",
    password:"5"

})