import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk('users/get', () => {
    return new Promise((res, rej) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => res(data))
            .catch(error => rej(error));
    })
})

export const userDataSlice = createSlice({
    name: 'userdata',
    initialState: {
        users: [],
        status: '',
    },
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getUsers.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(getUsers.fulfilled, (state, action) =>{
            state.status = ''
            state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action) =>{
            state.status = 'failed'
        })
    }
})

export default userDataSlice.reducer