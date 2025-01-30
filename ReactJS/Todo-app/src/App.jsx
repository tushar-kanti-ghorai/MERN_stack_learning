import { useState } from "react"

function App() {
 const [Todos,setTodo]=useState([
  {
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:"False"
 },
 {
  title:"Study dsa",
  description:"study dsa from 7-9",
  completed:"False"
}
])

function onPress(){
  setTodo([...Todos,{
    title:"Random",
    description:"Random add"
  }])
}


return <div>
  <button onClick={onPress}>Add random todo</button>
  {Todos.map(function(todo){
    return <TodoComponent title={todo.title} description={todo.description}/>
  })}

</div>
}

function TodoComponent(props){
return <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
</div>
}
export default App
