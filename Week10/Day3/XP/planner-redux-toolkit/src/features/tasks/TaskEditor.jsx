import { useSelector, useDispatch} from 'react-redux'
import './tasks.css'
import TasksTitle from "./TasksTitle";
import TaskAdder from "./TaskAdder";
import TaskRemover from "./TaskRemover";
import TaskCompleter from './TaskCompleter';
import { useRef } from 'react';
import { useState } from 'react';
import { editTask, addTask, removeTask } from './TaskSlice';


const TaskEditor = (props) => {
    const [value, setValue] = useState()
    const editInputRef = useRef()
    const dispatch = useDispatch()
    const date = useSelector((state) => state.TaskReducer.currentDate)
    const tasks = useSelector((state) => state.TaskReducer.tasks)

    const handleChange = (id, task) =>{
        dispatch(removeTask(id))
        dispatch(addTask(task))
        setValue('');
    }

    return(
        <>
            <TasksTitle/>
            <TaskAdder/>
            {
                tasks.filter(task => task.date === date).map(item => {
                    console.log(item);
                    if (!item.isEditing){
                    return(
                        <div key={item.id}>
                            <span className={item.isCompleted ? 'completed' : ''}>{item.task}</span> {" "}
                            {console.log("item.is - " + item.isCompleted)}
                            <TaskCompleter id={item.id}/>
                            <TaskRemover id={item.id}/>
                            <button onClick={() => dispatch(editTask(item.id))}>Edit</button>
                        </div>
                    )} else {
                        return(
                            <div key={item.id}>
                                <input defaultValue={item.task} ref={editInputRef} onChange={(e) => setValue(e.target.value)}/>
                                <button onClick={() => handleChange(item.id, value)}>Save</button>
                                <button onClick={() => dispatch(editTask(item.id))}>Cancel</button>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default TaskEditor