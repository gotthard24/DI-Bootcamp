import { useState } from "react"
import { useTasks, useCategories } from "./taskHooks"

const TaskList = (props) =>{
    const [category, setCategory] = useState('Home')
    const tasks = useTasks(category)
    const categories = useCategories()

    return(
        <div>
            <h2>Tasks</h2>
            <div>
                <select name="Category" onChange={(e) => setCategory(e.target.value)}>
                    {categories.map(cat => {
                        return(
                            <option value={cat.name} key={cat.id}>{cat.name}</option>
                        )
                    })}
                </select>  
                {tasks.map(task =>{
                    return(
                        <div key={task.id}>
                            <h3>{task.category}</h3>
                            <p>{task.task}</p>
                        </div>
                    )
                })}  
            </div>
        </div>
    )
}

export default TaskList