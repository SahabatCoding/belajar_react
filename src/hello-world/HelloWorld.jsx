import './style.css'
function HelloWorld(){

    const props = {
        header : "Hello World",
        paragraph : "sayang ibu"
    }
    return(
        <div>
            <Header {...props}/>
            <Paragraph {...props}/>
        </div>
    )
}

function Header({header = "ups salah"}){
    return (
        <>
        <h2 className='container'>{header}</h2>
        </>
    )
}

function Paragraph(props){
    return (
        <>
        <p className='content'>{props.paragraph}</p>
        </>
    )
}

export default HelloWorld