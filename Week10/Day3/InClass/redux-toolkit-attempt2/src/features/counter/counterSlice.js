import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    count: 5,
    step: 1
}

export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(101)
        }, 3000)
    })
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.count += state.step
        },
        decrement: (state) =>{
            state.count -= state.step
        },
        reset: (state) =>{
            state.count = 0
        },
        incrementStep: (state) =>{
            state.step ++
        },
        decrementStep: (state) =>{
            state.step --
        },
        setNumber: (state, value) =>{
            state.count += parseInt(value.payload)
        },
        setWithPrepare: {
            reducer (state, action){
                state.count += action.payload.num1 + action.payload.num2
            },
            prepare(param1, param2) {
                return { payload: {num1: param1, num2:param2}}
            }
        },
    },
    extraReducers(builder) {
        builder
        .addCase(delayIncrementThunk.pending, (state, action) => {
            state.count += 4
        })
        .addCase(delayIncrementThunk.fulfilled, (state, action) =>{
            state.count += action.payload
        })
        .addCase(delayIncrementThunk.rejected, (state, action) =>{
            state.count = action.error.message
        })
    }
})

export const { increment, decrement, reset, incrementStep, decrementStep, setNumber, setWithPrepare,} = counterSlice.actions

export default counterSlice.reducer;