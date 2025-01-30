let currentdate=new Date()
console.log(currentdate)

  // Getting various components of the date
console.log(currentdate.getDate());
console.log(currentdate.getFullYear());
console.log(currentdate.getMonth()+1)// as starts from index zero 
console.log(currentdate.getHours())
console.log(currentdate.getMinutes())
console.log(currentdate.getSeconds())


  // Setting various components of the date

  currentdate.setFullYear(2023)
  console.log("After setFullyear:"+currentdate)
  currentdate.setMonth(2)
  console.log("After setMonth:"+currentdate)
 
//new date set
 const newDate=new Date(2023,5,15);
 console.log(newDate)

 //setTime Interval
 function currentTimeprint(){
    console.log(new Date().getTime())
 }

 setInterval(currentTimeprint,5000)//1sec=1000millisecond