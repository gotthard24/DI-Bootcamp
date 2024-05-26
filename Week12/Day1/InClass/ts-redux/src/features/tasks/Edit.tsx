import { useRef } from "react"
import { useEditTask, useToggleEditTask } from "./hooks"
import { ItemInterface } from "../../model/Item"

type TaskItemProps = {
    task: ItemInterface;
}

const Edit = ({task}: TaskItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const toggleEdit = useToggleEditTask();
    const edit = useEditTask()

    const handleEdit = () => {
        toggleEdit(task.id)
        console.log(task)
    }

    const handleSave = () => {
        if (inputRef.current) {
            const updatedTask = inputRef.current.value;
            edit(task.id, updatedTask);
            toggleEdit(task.id);
        }
    }

    return(
        <>
            <input ref={inputRef} defaultValue={task.body}/>
            <button onClick={() => handleSave()}>Save</button>
            <button onClick={() => handleEdit()}>Cancel</button>
        </>
    )
}

export default Edit