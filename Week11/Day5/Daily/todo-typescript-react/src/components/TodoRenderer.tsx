import ToDoList from "./TodoList";
import TaskAdder from "./TaskAdder";
import { useState } from "react";
import { Todo } from "../types/todo";

const TodoRenderer = () =>{
    const [tasks, setTasks] = useState<Todo[]>([])

    return(
        <>
            <h1>TO-DO List</h1>
            <TaskAdder tasks={tasks} setTasks={setTasks}/>
            <ToDoList tasks={tasks} renderTask={(task) => <div>{task.task}</div>}/>
        </>
    )
}

export default TodoRenderer