import { createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: nanoid(), task: action.payload, isCompleted: false})
        },
        removeTask: (state, action) => {
            state.tasks.splice(action.payload, 1)
        },
        completeTask: (state, action) => {
            const task = state.tasks[action.payload];
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }
    }
})

export const {addTask, removeTask, completeTask} = todoSlice.actions
export default todoSlice.reducer