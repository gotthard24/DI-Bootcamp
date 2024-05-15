import { configureStore } from '@reduxjs/toolkit'
import { TaskReducer } from '../features/tasks/TaskReducer'

export default configureStore({
    reducer:{
        TaskReducer,
    }
})