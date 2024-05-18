import { useDispatch } from "react-redux"
import { removeTask } from "./TaskSlice"

const TaskRemover = (props) => {
    const dispatch = useDispatch()

    return(
        <button onClick={() => dispatch(removeTask(props.id))}>Remove</button>
    )
}

export default TaskRemover