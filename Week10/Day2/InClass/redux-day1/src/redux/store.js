import {configureStore} from "@reduxjs/toolkit"
import { displayTextReducer } from "./reducers"

export default configureStore({
    reducer: {
        displayTextReducer,
    }
})