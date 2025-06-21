export default function TaksList ({items = []}){
    return (
        <>
            <h1>List Tasks</h1>
            <ul>
                {items.map((item, index)=> 
                    <li key={index} >{item}</li>
                )}
            </ul>
        </>
    )
}