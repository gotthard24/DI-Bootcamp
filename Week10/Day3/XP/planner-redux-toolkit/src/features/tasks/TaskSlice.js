import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        currentDate: ''
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: nanoid(), task: action.payload, isCompleted: false, isEditing: false, date: state.currentDate})
        },
        removeTask: (state, action) => {
            const task = state.tasks.find(item => item.id === action.payload);
            state.tasks.splice(task, 1)
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(item => item.id === action.payload);
            if (task) task.isCompleted = !task.isCompleted;
        },
        setCurrentDate: (state, action) =>{
            state.currentDate = action.payload
        },
        editTask: (state,action) =>{
            const task = state.tasks.find(item => item.id === action.payload);
            if (task) task.isEditing = !task.isEditing
        }
    }
})

export const {addTask, removeTask, completeTask, setCurrentDate, editTask} = TaskSlice.actions
export default TaskSlice.reducer