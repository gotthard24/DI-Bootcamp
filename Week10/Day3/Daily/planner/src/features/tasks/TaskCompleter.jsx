import { useDispatch } from "react-redux"
import { COMPLETE_TASK } from "./TaskReducer"

const TaskCompleter = (props) => {
    const dispatch = useDispatch()

    const completeTask = () => {
        dispatch({type: COMPLETE_TASK, id: props.id})
    }

    return(
        <button onClick={() => completeTask()}>Complete</button>
    )
}

export default TaskCompleter