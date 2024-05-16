import {configureStore} from '@reduxjs/toolkit'
import ageCounterReducer from '../features/ageCounter/ageCounterSlice'

export default configureStore({
    reducer:{
        ageCounterReducer,
    }
})