import './tasks.css'
import { ItemInterface } from "../../model/Item"
import TaskRemove from "./TaskRemove"
import { useCompleteTask, useToggleEditTask } from "./hooks";
import Edit from './Edit';

type TaskItemProps = {
    task: ItemInterface;
}

const TaskItem = ({task}: TaskItemProps) => {
    const toggle = useCompleteTask();
    const edit = useToggleEditTask();

    const handleComplete = () => {
        toggle(task.id)
    }

    const handleEdit = () => {
        edit(task.id)
        console.log(task)
    }

    return (
        <>
            <div>
                {task.isEditing ? (
                    <Edit task={task} />
                ) : (
                    <>
                        <span className={task.isChecked ? 'completed' : ''}>
                            {task.body}
                        </span>
                        <button onClick={handleComplete}>Toggle Task</button>
                        <button onClick={handleEdit}>Edit Task</button>
                        <TaskRemove id={task.id} />
                    </>
                )}
            </div>
        </>
    );    
}

export default TaskItem