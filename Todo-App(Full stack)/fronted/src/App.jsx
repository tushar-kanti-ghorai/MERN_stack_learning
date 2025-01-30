import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'
import { useEffect } from 'react';

function App() {
  const [todos, setTodo] = useState([]);

// useEffect(()=>{
//   fetch("http://localhost:3000/todos")
//   .then(async function (res) {
//     const json=await res.json();
//     setTodo(json.Todos)
//   },)

// },[])
 
  return <div>
  <CreateTodo></CreateTodo>
  <Todos todos={todos}></Todos>
    </div>
  
    
}

export default App
