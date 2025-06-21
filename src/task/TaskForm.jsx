import { useState } from "react";

export default function TaskForm({onSubmit}){
    const [item, setItem] = useState("")

    function handelChange(e){
        setItem(e.target.value)
    }

    function handelClick(e){
        e.preventDefault()
        onSubmit((items)=>{
            items.push(item)
        })
        setItem("")
    }

    return(
        <>
            <h1>Create Task</h1>
            <form>
                <input value={item} onChange={handelChange} />
                <button onClick={handelClick} >Add
                    
                </button>
            </form>
        </>
    )
}