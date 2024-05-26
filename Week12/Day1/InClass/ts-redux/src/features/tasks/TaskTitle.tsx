type TasktitleProps = {
    tasksCount: number
}

const TaskTitle = ({tasksCount}: TasktitleProps) => {
    return (
        <h3> Current Tasks: {tasksCount}</h3>
    )
}

export default TaskTitle