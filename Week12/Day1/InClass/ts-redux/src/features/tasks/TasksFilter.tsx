import { useSetFilter } from "./hooks"
import { EnumActiveState } from "./slice"
import { nanoid } from "@reduxjs/toolkit"
import { memo } from "react"

const TasksFilterButtons = () =>{
    const setFilter = useSetFilter()

    return(
        <>
            <h3>filters</h3>
            {
                Object.keys(EnumActiveState)
                    .filter(key => isNaN(Number(key)))
                    .map(key => (
                        <button key={nanoid()} onClick={() => setFilter(EnumActiveState[key as keyof typeof EnumActiveState])}>
                            {key}
                        </button>
                    ))
            }
        </>
    )
}

const MemorizedTasksFilterButtons = memo(TasksFilterButtons)
export default MemorizedTasksFilterButtons;