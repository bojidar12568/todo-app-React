import { useState } from "react"

export default function TodoForm ({onAdd}) {
    const [userInput, setUserInput] = useState('')
    

    function handleUserInput (event) {
        setUserInput(event.target.value)
    }

    

    return(
        <>
        <input value={userInput} onChange={handleUserInput} placeholder="todo" type="text" />
        <button onClick={() => onAdd(userInput)}>Add</button>
        </>
    )
}