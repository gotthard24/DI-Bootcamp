import { createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import Item from "../../model/Item";
import { StoreStateType } from "../../app/store";

// export type ActiveState = 'all' | 'actice' | 'completed';

export enum EnumActiveState {
    All = 1,
    Active,
    Completed,
}

export type InitialState = {
    tasks: Item[],
    filter: EnumActiveState
}

const initialState: InitialState = {
    tasks: [],
    filter: EnumActiveState.All
}

interface EditTaskPayload {
    id: string;
    task: string;
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) =>{
            const task: Item = new Item(nanoid(), action.payload)
            state.tasks.push(task.serialize() as Item)
        },
        removeTask: (state, action: PayloadAction<string>) =>{
            // const taskIndex = state.tasks.findIndex(item => item.id === action.payload);
            // state.tasks.splice(taskIndex, 1)
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        completeTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(item => item.id === action.payload);
            if (task) task.isChecked = !task.isChecked
        },
        setFilter: (state, action: PayloadAction<EnumActiveState>) => {
            state.filter = action.payload
        },
        removeAll: (state) => {
            state.tasks = [];
        },
        toggleEditTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(item => item.id === action.payload);
            if (task) task.isEditing = !task.isEditing
        },
        editTask: (state, action: PayloadAction<EditTaskPayload>) => {
            const task = state.tasks.find(item => item.id === action.payload.id);
            if (task) task.body = action.payload.task
        },
    }
})

export const tasksState = (state: StoreStateType) => state.taskReducer.tasks
export const filterState = (state: StoreStateType) => state.taskReducer.filter

export const {addTask, removeTask, setFilter, removeAll, completeTask, toggleEditTask, editTask} = taskSlice.actions
export default taskSlice.reducer