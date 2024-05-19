import { createSelector } from "@reduxjs/toolkit";
import { useSelector} from "react-redux";
import { state } from "./taskSlice";

export const useTasks = (val) => {
    const tasks = createSelector(state, (state) => state.tasks.filter(task => task.category === val))
    return useSelector(tasks)
}

export const useCategories = (val) => {
    const cats = createSelector(state, (state) => state.categories.map(cat => cat))
    return useSelector(cats)
}