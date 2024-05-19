import { useRef, useState } from "react"
import { useTasks, useCategories, useAllTasks } from "./taskHooks"
import { addTask,removeTask, completeTask, editTask } from "./taskSlice"
import { useDispatch } from "react-redux"

const TaskList = (props) =>{
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()
    const tasks = useTasks(category)
    const allTasks = useAllTasks()
    const categories = useCategories()
    const taskRef = useRef()
    const catRef = useRef()
    const catEditRef = useRef()
    const editRef = useRef()

    const handleChange = (id, task, category) =>{
        dispatch(removeTask(id))
        dispatch(addTask({task, category}))
    }

    return(
        <div>
            <h2>Tasks: {allTasks.length}</h2>
            <div>
                <select name="Category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">--select--</option>
                    {categories.map(cat => {
                        return(
                            <option value={cat.name} key={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>  <br />
                <input placeholder="Task" ref={taskRef}/> <br />
                <input placeholder="Category" ref={catRef}/> <br />
                <button onClick={() => dispatch(addTask({task: taskRef.current.value, category: catRef.current.value}))}>Add Task</button> <br />
                {tasks.map(task =>{
                    if(!task.isEditing){
                    return(
                        <div key={task.id}>
                            <h3>{task.category}</h3>
                            <p>{task.task}</p>
                            <button onClick={() => dispatch(removeTask(task.id))}>Remove Task</button>
                            <button onClick={() => dispatch(editTask(task.id))}>Edit Task</button>
                        </div>
                    )} else {
                    return(
                            <div key={task.id}>
                                <select name="Category" ref={catEditRef}>
                                    {categories.map(cat => {
                                        return(
                                            <option value={cat.name} key={cat.id}>{cat.name}</option>
                                        )
                                    })}
                                </select>  <br />
                                <input ref={editRef} />
                                <button onClick={() => handleChange(task.id, editRef.current.value, catEditRef.current.value )}>Save</button>
                                <button onClick={() => dispatch(editTask(task.id))}>Cancel</button>
                            </div>
                        )
                    }
                })}  
            </div>
        </div>
    )
}

export default TaskList