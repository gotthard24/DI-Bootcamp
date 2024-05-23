import React from "react"

interface IList<T>{
    tasks: T[];
    renderTask: (task: T) => React.ReactNode
}

const ToDoList = <T,>({tasks, renderTask}: IList<T>): JSX.Element => {
    return(
        <>
            <section>
                <ul>
                    {
                        tasks.map((task, i) => (
                            <li key={i}>{renderTask(task)}</li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default ToDoList