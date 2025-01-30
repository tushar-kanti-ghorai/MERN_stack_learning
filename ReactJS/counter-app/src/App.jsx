import { useState } from "react";


function App() {
 const [count,setCount]=useState(0);
 
  return <div>
    <ButtonComponent count={count} setCount={setCount}></ButtonComponent>
    <ButtonComponent count={count+10} setCount={setCount}></ButtonComponent>
    </div>
   
}

function ButtonComponent(props){
  function onClickHandler(){
   props.setCount(props.count+1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}

export default App
