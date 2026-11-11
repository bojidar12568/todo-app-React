import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter"
import TodoCounter from "./components/TodoCounter"

export default function App () {
 const [todos, setTodos] = useState([])
 const [filter, setFilter] = useState('All')

 function handleTodo (userInput) {
  setTodos(todolist => [... todolist, {text: userInput, done: false} ])

}
 
function handleDelBtn (delbtnprop) {
  setTodos(todos => todos.filter((todo, index ) => index !== delbtnprop))
}

function handleMarkAsDone (markDone) {
  setTodos(old => old.map((item , index) => index === markDone ? {...item, done: !item.done}: item ))
}
 
function deleateAllDoneItems () {
  setTodos(todo => todo.filter(keepItems => !keepItems.done))
}

function markAllAsDoneBtn () {
  setTodos((todos) => todos.map((item) => ({ ...item, done: true })))
}

let visableTodos = todos

if (filter === 'Active') {
  visableTodos = todos.filter((todo) => !todo.done)
}

if (filter === 'Done') {
  visableTodos = todos.filter((todo) => todo.done)
} 

  return(
  <div>
    <h1>My Todos</h1>
    <TodoForm onAdd = {handleTodo}  />
    <TodoFilter onFilter = {setFilter}  />
    <TodoList list={visableTodos} delBtn =  {handleDelBtn} markAsDone = {handleMarkAsDone}  />
    <TodoCounter todo= {todos}/>
    <button onClick={markAllAsDoneBtn}>Mark All As Done</button>
    <button onClick={deleateAllDoneItems}>Deleate All Done Tasks</button>
  </div> 
)}