import { useImmer } from "use-immer";
import TaksList from "./TaskList";
import TaskForm from "./TaskForm";

export default function Task(){
    const [items, setItems] = useImmer([])

    return (
        <div>
            <TaskForm onSubmit={setItems} />
            <TaksList items={items}/>
        </div>
    )
}