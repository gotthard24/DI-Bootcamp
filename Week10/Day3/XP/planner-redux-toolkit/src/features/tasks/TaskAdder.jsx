import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";
import {useSelector} from "react-redux"

const TaskAdder = (props) =>{
    const currentDate = useSelector((state) => state.TaskReducer.currentDate)
    const inputTaskRef = useRef();
    const dispatch = useDispatch();

    const add = () => {
        if(inputTaskRef.current.value.trim() === "" || currentDate === '') return;
        dispatch(addTask(inputTaskRef.current.value))
        inputTaskRef.current.value = '';
    }

    return(
        <div>
            <input  ref={inputTaskRef}/>
            <button onClick={() => add()}>Add task</button>
        </div>
    )
}

export default TaskAdder