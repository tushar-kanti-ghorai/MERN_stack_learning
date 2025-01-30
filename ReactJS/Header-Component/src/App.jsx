import { Fragment, useState } from "react"
import React from 'react';

function App() {
  const [title,setTitle]=useState("My name is Tushar");
  function updateTitle(){
        setTitle("My name is "+Math.random());
      }
  
return (
     <Fragment>

    
    {/* <Headerupdate></Headerupdate> */}
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
    <Header title="My name is Tushar2"></Header>
    <Header title="My name is Tushar3"></Header>
    <Header title="My name is Tushar4"></Header>
    <Header title="My name is Tushar5"></Header>
  
    </Fragment>
  )
  
}
// //only this is rerender
// function Headerupdate(){
//   const [title,setTitle]=useState("My name is Tushar")

//   function updateTitle(){
//     setTitle("My name is "+Math.random());
//   }

//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>

// }

const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
