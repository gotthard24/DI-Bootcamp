import { configureStore} from '@reduxjs/toolkit'
import bookReducer from '../features/books/bookSlice'

export default configureStore({
    reducer: {
        bookReducer,
    }
})