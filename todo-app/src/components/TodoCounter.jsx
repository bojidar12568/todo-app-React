export default function TodoCounter ({todo}) {
   const counter = todo.filter(todos => todos.done)
    
    return(
        <>
        <p>{counter.length} Are done</p>
        </>
    )
}