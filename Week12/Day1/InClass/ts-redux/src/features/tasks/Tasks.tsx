import TaskTitle from "./TaskTitle"
import TasksInput from "./TasksInput"
import TasksFilterButtons from "./TasksFilter"
import TasksList from "./TasksList"

import { useTasks } from "./hooks"

const Tasks = () => {
    const tasks = useTasks()
    
    return(
        <>
            <h2>Tasks</h2>
            <TaskTitle tasksCount={tasks.length}/>
            <TasksInput/>
            <TasksFilterButtons/>
            <TasksList/>
        </>
    )    
}

export default Tasks