export default function TodoList ({list, delBtn, markAsDone }) {
    return (
        <>
        <ul>
           {list.map((todolist, index,) => <li onClick = {() => markAsDone(index)} className ={todolist.done ? 'done' : undefined} key={index}>{todolist.text}
            <button onClick={() => delBtn(index)}>Delete</button>
           </li>
           )}
        </ul>
        </>
    )
}