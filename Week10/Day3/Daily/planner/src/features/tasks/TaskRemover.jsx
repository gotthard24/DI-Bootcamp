import { useDispatch } from "react-redux"
import { REMOVE_TASK } from "./TaskReducer"

const TaskRemover = (props) => {
    const dispatch = useDispatch()

    const removeTask = () => {
        dispatch({type: REMOVE_TASK, id: props.id})
    }

    return(
        <button onClick={() => removeTask()}>Remove</button>
    )
}

export default TaskRemover