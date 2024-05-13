import { useRef } from 'react'
import './App.css'
import { addTask, removeTask, completeTask} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const tasks = useSelector((state) => state.taskReducer.tasks)
  const dispatch = useDispatch()
  const inputRef = useRef()

  const handleAddTask = () =>{
    dispatch(addTask({name: inputRef.current.value, isCompleted: false}))
    inputRef.current.value = null
  }

  return (
    <>
    <h1>To-Do List</h1>
    <input placeholder='Add task' ref={inputRef}/>
    <button onClick={handleAddTask}>Add Task</button>
    {tasks.map((item,i)=>{
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

export default App
