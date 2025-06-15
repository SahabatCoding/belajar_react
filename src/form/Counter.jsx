import { useState } from "react"

export default function Counter (){
    let [counter, setCounter] = useState(0)
    console.log("render")
    function handleClick(){
        setCounter(counter++)
        console.log("memori lokal", counter)
    }

    return(
        <div>
            <div>
                <button onClick={handleClick} >Increment</button>
            </div>
            <h1>Counter : {counter}</h1>
        </div>
    )
}