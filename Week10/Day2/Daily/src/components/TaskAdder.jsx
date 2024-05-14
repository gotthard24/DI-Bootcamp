import { useRef } from 'react'
import { addTask, removeTask, completeTask} from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

const TaskAdder = (props) =>{
    const data = useSelector((state) => state.taskReducer)
    const {month, day} = data.currentDay
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleAddTask = () =>{
        dispatch(addTask({name: inputRef.current.value, isCompleted: false}))
        inputRef.current.value = null
        console.log(month, day);
    }
    if(month && day)
        {
            return (
                <>
                <h1>To-Do List</h1>
                <input placeholder='Add task' ref={inputRef}/>
                <button onClick={handleAddTask}>Add Task</button>
                {data.month[month][day].tasks.map((item,i)=>{
                return(
                    <div key={i}>
                    <span>
                        {item.isCompleted ? <p style={{ textDecoration: 'line-through' }}>{item.name}</p> :<p>{item.name}</p>}
                        <button onClick={() => dispatch(completeTask(i))}>Complete</button> 
                        <button onClick={() => dispatch(removeTask(i))}>Remove</button>
                    </span>
                    </div>
                )
                })}
                </>
            )
        }
}

export default TaskAdder