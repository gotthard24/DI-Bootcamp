import { memo } from "react";

const ToDo = ({todos, addTask, calc}) =>{
    console.log('todo child render');
    return(
        <div>
            <h2>ToDo : {calc}</h2>
            <button onClick={addTask}>Add task</button>
            {
                todos.map((task, i) =>{
                    return(
                        <p key={i}> {i} : {task}</p>
                    )
                })
            }
        </div>
    )
}

export default memo(ToDo)