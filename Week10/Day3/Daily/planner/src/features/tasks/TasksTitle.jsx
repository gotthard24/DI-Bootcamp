import { useSelector } from "react-redux"

const TasksTitle = (props) => {
    const tasks = useSelector((state) => state.TaskReducer.tasks);

    return(
        <h2>Task List = {tasks.length}</h2>
    )
}

export default TasksTitle