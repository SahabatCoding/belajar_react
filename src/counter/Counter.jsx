import { useRef, useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0)
    const countRef = useRef(0)
  

    function handleClick(e){
        let test = 0
        e.preventDefault()
        setCounter(counter + 1)
        countRef.current += 1
        test += 1
        console.log('State : ', counter, ' Ref : ', countRef.current, ' Test : ', test)
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