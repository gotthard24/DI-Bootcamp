import { configureStore} from '@reduxjs/toolkit'
import { taskReducer } from '../features/tasks/taskReducer'

export default configureStore({
    reducer:{
        taskReducer,
    }
});