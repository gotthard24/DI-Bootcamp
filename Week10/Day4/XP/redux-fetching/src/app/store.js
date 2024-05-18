import { configureStore} from '@reduxjs/toolkit'
import userDataReducer from '../features/userData/userDataSlicer'

export default configureStore({
    reducer:{
        userDataReducer,
    }
})