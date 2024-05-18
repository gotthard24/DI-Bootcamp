import { completeTask } from "./TaskSlice"
import { useDispatch } from "react-redux";

const TaskCompleter = (props) => {
    const dispatch = useDispatch();
    
    return(
        <button onClick={() => dispatch(completeTask(props.id))}>Complete</button>
    )
}

export default TaskCompleter