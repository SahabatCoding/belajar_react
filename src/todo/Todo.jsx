export default function Todo({isCompleted, text}){
    if(isCompleted){
        return(
            <li>
                <del>{text}</del>
            </li>
        )
    }else{
        return(
            <li>
                {text}
            </li>
        )
    }

}