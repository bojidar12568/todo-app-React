export default function TodoList ({list}) {
    return (
        <ul>
           {list.map((todolist, index) => <li key={index}>{todolist}</li>)}
        </ul>
    )
}