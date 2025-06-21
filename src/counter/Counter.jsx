import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0)

    function handleClick(e){
        e.preventDefault()
        setCounter(counter + 1)
    }

    return(
        <div>
            <form>
                <h1>Counter : {counter}</h1>
                <button onClick={handleClick} >increment</button>
            </form>
        </div>
    )
}