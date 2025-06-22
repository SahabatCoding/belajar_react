import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleSchange(e){
        console.log(e)
        setShow2(e.target.checked)
    }

    return(
        <div>
            <Counter/>
            {show2 && <Counter/>}
            <input type="checkbox" checked={show2} onChange={handleSchange} />Tampilkan Counter 2
        </div>
    )
}