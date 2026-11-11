export default function TodoCounter ({todo}) {
   const counterAreDone = todo.filter(todos => todos.done)
  
    
    return(
        <>
        <p>{counterAreDone.length} of {todo.length} Are done</p>
        </>
    )
}