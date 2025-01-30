/*
todos=[
{
title:"go to gym",
description:"go to gym from 7 to 9"
}]
*/
export function Todos({todos}){//object destructing -{todos}
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "Completed":"Marks as complete"}</button>
            </div>
        })}
    </div>

}