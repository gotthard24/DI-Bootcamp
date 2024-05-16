import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const ageDecrementAsync = createAsyncThunk('agecounter/decrasync', () =>{
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(1) 
        }, 3000)
    })
})

export const ageIncrementAsync = createAsyncThunk('agecounter/incrasync', () =>{
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res(1) 
        }, 3000)
    })
})

export const ageCounterSlice = createSlice({
    name: 'agecounter',
    initialState: {
        count:0,
        status: ''
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(ageDecrementAsync.pending, (state, action) =>{
            state.status = 'pending'
        })
        .addCase(ageIncrementAsync.pending, (state, action) =>{
            state.status = 'pending'
        })
        .addCase(ageDecrementAsync.fulfilled, (state, action) =>{
            state.status = ''
            state.count --
        })
        .addCase(ageIncrementAsync.fulfilled, (state, action) =>{
            state.status = ''
            state.count ++
        })
    }
})

export default ageCounterSlice.reducer