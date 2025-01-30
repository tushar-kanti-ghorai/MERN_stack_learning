const user='{"name":"Tushar","age":22,"gender":"male"}'//string
const users=JSON.parse(user)//convert string into object

console.log(users["gender"])
console.log(users)


//convert object into string
const person={
    name:"Tushar",
    age:"Male",
    gender:"Male"

}


const persons=JSON.stringify(person)////convert object into string
console.log(persons)