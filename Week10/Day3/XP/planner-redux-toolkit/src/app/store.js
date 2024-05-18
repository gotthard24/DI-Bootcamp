import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from '../features/tasks/TaskSlice.js'

export default configureStore({
    reducer:{
        TaskReducer,
    }
})