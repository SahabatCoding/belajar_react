import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import AlertButton from "../button/AlertButton"
import TodoList from "../todo/TodoList"
import Container from "./container"
import HelloWorld from "./HelloWorld"
import SearchForm from "../form/SearchForm"
import Counter from "../form/Counter"

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <AlertButton text="Click Me" onSmash={()=> alert("sukses")}/>
                <SearchForm/>

                <Counter/>
            </Container>
        </StrictMode>
    )