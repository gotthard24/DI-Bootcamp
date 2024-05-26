import TaskItem from "./TaskItem"
import { useTasks,  } from "./hooks"
import { nanoid } from "@reduxjs/toolkit"

const TasksList = () => {
    const tasks = useTasks();
    return(
        <>
            {tasks.map(task => (
                <TaskItem key={nanoid()} task={task}/>
            ))}
        </>
    )
}

export default TasksList