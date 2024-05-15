import { useSelector, useDispatch} from 'react-redux'
import './tasks.css'
import TasksTitle from "./TasksTitle";
import TaskAdder from "./TaskAdder";
import TaskRemover from "./TaskRemover";
import TaskCompleter from './TaskCompleter';
import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './TaskReducer';
import { useRef } from 'react';
import { useState } from 'react';


const TaskEditor = (props) => {
    const [value, setValue] = useState()
    const editInputRef = useRef()
    const dispatch = useDispatch()
    const date = useSelector((state) => state.TaskReducer.currentDate)
    const tasks = useSelector((state) => state.TaskReducer.tasks)

    const handleChange = (id, task) =>{
        dispatch({type: REMOVE_TASK, id})
        dispatch({type: ADD_TASK, payload: task})
        setValue('');
    }

    return(
        <>
            <TasksTitle/>
            <TaskAdder/>
            {
                tasks.filter(task => task.date === date).map(item => {
                    if (!item.isEditing){
                    return(
                        <div key={item.id}>
                            <span className={item.isCompleted ? 'completed' : ''}>{item.task}</span> {" "}
                            <TaskCompleter id={item.id}/>
                            <TaskRemover id={item.id}/>
                            <button onClick={() => dispatch({type: EDIT_TASK, id: item.id})}>Edit</button>
                        </div>
                    )} else {
                        return(
                            <div key={item.id}>
                                <input defaultValue={item.task} ref={editInputRef} onChange={(e) => setValue(e.target.value)}/>
                                <button onClick={() => handleChange(item.id, value)}>Save</button>
                                <button onClick={() => dispatch({type: EDIT_TASK, id: item.id})}>Cancel</button>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default TaskEditor