import { useState } from "react"

export default function TodoForm ({onAdd}) {
    const [userInput, setUserInput] = useState('')
    
     

    function handleUserInput (event) {
        setUserInput(event.target.value)
    }
    
    
    function handleClick() {
        if (userInput.trim() === '') {
            return 
        } else {
            onAdd(userInput);
            setUserInput('')
        }
    }
     
    return(
        <>
        <input value={userInput} onChange={handleUserInput} placeholder="todo" type="text" />
        <button  onClick={handleClick} >Add</button>
        </>
    )
}