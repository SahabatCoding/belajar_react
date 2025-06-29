import { useState } from "react";

export default function Note ({note, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e){
        const newNote = {...note, text: e.target.value}
        onChange(newNote)
    }

    if(isEditing){
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={()=> setIsEditing(false)} >Save</button>
            </>
        )
    }else{
        component = (
            <>
                {note.text}
                <button onClick={()=> setIsEditing(true)} >Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeText} />
            {component}
            <button onClick={()=> onDelete(note)} ></button>
        </label>
    )
}