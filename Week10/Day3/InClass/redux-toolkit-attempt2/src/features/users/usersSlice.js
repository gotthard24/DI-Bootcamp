import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'

const initialState = {
    users: [],
    status: ''
}

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

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) =>{
            state.users.push({id: nanoid(), name: action.payload})
        },
        addUserPrepare:{
            reducer(state, action){
                state.users.push(action.payload)
            },
            prepare(firstName, lastName){
                return {
                    payload: {id: nanoid(), name: firstName + ' ' + lastName}
                }
            }
        }
    },
    extraReducers(builder) {
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

export const {addUser, addUserPrepare} = userSlice.actions

export default userSlice.reducer;