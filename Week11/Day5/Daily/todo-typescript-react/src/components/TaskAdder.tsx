import { SetStateAction, useRef} from "react";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from 'uuid';

interface TaskAdderProps {
    tasks: Todo[];
    setTasks: React.Dispatch<SetStateAction<Todo[]>>;
}

const TaskAdder = ({ tasks, setTasks }: TaskAdderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTask = () => {
        if (inputRef.current?.value === undefined || inputRef.current.value.trim() === '') return;

        const newTask: Todo = {
            id: uuidv4(),
            task: inputRef.current.value.trim()
        };
        inputRef.current.value = '';
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={addTask}>Add Task</button>
        </>
    );
};

export default TaskAdder;
