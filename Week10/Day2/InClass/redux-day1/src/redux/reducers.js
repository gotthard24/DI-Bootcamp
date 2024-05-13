import { TEXT } from "./actions"

const InitialState = {
    text: 'Hello World!'
}

export const displayTextReducer = (state=InitialState,action) => {
    switch (action.type) {
        case TEXT:
            return {...state, text: action.payload}
        default:
            return state
    }
}
