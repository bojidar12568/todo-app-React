import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"



export default function App () {
 const [todos, setTodos] = useState([])

 function handleTodo (userInput) {
  setTodos(todolist => [... todolist, userInput ])
 
 
}
 
 
 
  return(
  <div>
    <h1>My Todos</h1>
    <TodoForm onAdd = {handleTodo}  />
    <TodoList list={todos} />
  </div> 
)}