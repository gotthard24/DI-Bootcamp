import { configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
    reducer:{
        counterReducer,
        usersReducer,
    }
})