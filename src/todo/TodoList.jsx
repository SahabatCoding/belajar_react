import Todo from "./Todo";

export default function TodoList (){
    const data = [
        {
            isCompleted : false,
            text : "Learn Javascript"
        },
        {
            isCompleted : false,
            text : "Learn React"
        },
        {
            isCompleted : true,
            text : "Learn PHP"
        }
    ]
    return(
        <ul>
            {data.map((todo)=>(<Todo {...todo}/>))}
        </ul>
    )
}