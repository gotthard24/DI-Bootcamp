import { useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { addTask, removeAll, removeTask, completeTask, setFilter, EnumActiveState, tasksState, filterState, toggleEditTask, editTask} from "./slice";

export const useTasks = () => {
    return useAppSelector(
        createSelector([tasksState, filterState], (tasks, filter) => {
            switch (filter) {
                case EnumActiveState.Active:
                   return tasks.filter(task => !task.isChecked)
                case EnumActiveState.Completed:
                    return tasks.filter(task => task.isChecked)
                default:
                    return tasks;
            }
        })
    )
}

export const useTask = (id: string) => {
    return useAppSelector(
        createSelector([tasksState], (tasks) => {
            tasks.find(task => task.id === id)
        })
    )
}

export const useFilter = () => {
    return useAppSelector(
        createSelector([filterState], (filter) => filter)
    )
}

export const useSetFilter = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (filter: EnumActiveState) => {
            dispatch(setFilter(filter))
        },
        [dispatch]
    )
}

export const useAddTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (task: string) => {
            dispatch(addTask(task))
        },
        [dispatch]
    )
}

export const useRemoveTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (id: string) => {
            dispatch(removeTask(id))
        },
        [dispatch]
    )
}

export const useCompleteTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (id: string) => {
            dispatch(completeTask(id))
        },
        [dispatch]
    )
}

export const useClearTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(() => {dispatch(removeAll())},[dispatch])
}

export const useToggleEditTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (id: string) => {
            dispatch(toggleEditTask(id))
        },
        [dispatch]
    )
}

export const useEditTask = () => {
    const dispatch = useAppDispatch()
    return useCallback(
        (id: string,task: string) => {
            dispatch(editTask({id, task}))
        },
        [dispatch]
    )
}