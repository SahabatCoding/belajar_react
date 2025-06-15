import { useState } from "react";

const data = {
    name : "",
    message : ""
}

export default function ContactForm(){
    const [contact, setContact] = useState(data)

    function handleNameChange(e){
        console.log(e)
        setContact({...contact, name : e.target.value})
    }

    return(
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange}/>
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
        </div>
    )

}