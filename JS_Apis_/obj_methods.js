const obj={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

objectMethods(obj)


function objectMethods(obj){
    console.log("Original obj:",obj)

    let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

   let values=Object.values(obj);
   console.log("Object values:",values)

   console.log("Object entries",Object.entries(obj))

   
  let hasProp = obj.hasOwnProperty("key2");
   console.log("Object properity:",hasProp);

   let newobj=Object.assign(obj,{properity:"newvalue"})//merge the two object
   console.log("newobj:",newobj)
}