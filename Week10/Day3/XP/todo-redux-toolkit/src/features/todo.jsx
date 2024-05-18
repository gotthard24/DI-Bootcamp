import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, completeTask } from './todoSlice';
import { useRef } from 'react';

const Todo = () => {
    const inputRef = useRef();
    const tasks = useSelector((state) => state.todoReducer.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const task = inputRef.current.value.trim();
        if (task) {
            dispatch(addTask(task));
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input ref={inputRef} />
            <button onClick={handleAddTask}>Add Task</button>
            {tasks.map((item, i) => (
                <div key={item.id}>
                    <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.task}</p>
                    <button onClick={() => dispatch(removeTask(i))}>Remove</button>
                    <button onClick={() => dispatch(completeTask(i))}>Complete</button>
                </div>
            ))}
            {console.log(tasks)}
        </div>
    );
};

export default Todo;
