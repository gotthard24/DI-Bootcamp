import { useState, useRef } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "./taskReducer";
import './tasks.css'
import TasksTitle from "./TasksTitle";
import TaskAdder from "./TaskAdder";
import TaskRemover from "./TaskRemover";

const TaskList = (props) =>{
    const [filter, setFilter] = useState('all')
    const inputTaskRef = useRef('');
    const tasks = useSelector((state) => state.taskReducer.tasks)
    const dispatch = useDispatch();

    // const addTask = () => {
    //     if(inputTaskRef.current.value.trim() === "") return;
    //     dispatch({type: ADD_TASK, payload: inputTaskRef.current.value})
    //     inputTaskRef.current.value = '';
    // }

    const completeTask = (id) => {
        dispatch({type: COMPLETE_TASK, id})
    }

    // const removeTask = (id) => {
    //     dispatch({type: REMOVE_TASK, id})
    // }

    const filterTasks = tasks.filter(task => {
        if(filter === 'completed') return task.isCompleted
        else if(filter === 'active') return !task.isCompleted
        return task
    })

    return(
        <>
            {/* <h2>Task List = {tasks.length}</h2> */}
            {/* <div>
                <input  ref={inputTaskRef}/>
                <button onClick={() => addTask()}>Add task</button>
            </div> */}
            <TasksTitle/>
            <TaskAdder/>
            <div>
                <button onClick={() => setFilter('all')}>All Tasks</button>
                <button onClick={() => setFilter('completed')}>Completed Tasks</button>
                <button onClick={() => setFilter('active')}>Active Tasks</button>
            </div>
            {
                filterTasks.map(item => {
                    return(
                        <div key={item.id}>
                            <span className={item.isCompleted ? 'completed' : ''}>{item.task}</span> {" "}
                            <button onClick={() => completeTask(item.id)}>Complete</button>
                            {/* <button onClick={() => removeTask(item.id)}>Remove</button> */}
                            <TaskRemover id={item.id}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TaskList