import { useRef } from "react"
import { ADD_TASK} from "./taskReducer";
import { useDispatch } from "react-redux";

const TaskAdder = (props) =>{
    const inputTaskRef = useRef();
    const dispatch = useDispatch();

    const addTask = () => {
        if(inputTaskRef.current.value.trim() === "") return;
        dispatch({type: ADD_TASK, payload: inputTaskRef.current.value})
        inputTaskRef.current.value = '';
    }

    return(
        <div>
            <input  ref={inputTaskRef}/>
            <button onClick={() => addTask()}>Add task</button>
        </div>
    )
}

export default TaskAdder