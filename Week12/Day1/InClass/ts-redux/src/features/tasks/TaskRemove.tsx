import { useRemoveTask } from "./hooks"

interface TaskRemoveProps{
    id: string
}

const TaskRemove = ({id}: TaskRemoveProps) =>{
    const remove = useRemoveTask();

    return(
        <button onClick={() => remove(id)}>Remove Task</button>
    )
}

export default TaskRemove