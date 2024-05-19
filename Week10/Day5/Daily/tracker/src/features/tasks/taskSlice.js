import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    tasks: [{id: nanoid(), task: 'zaebatsya', category: 'Home'},
            {id: nanoid(), task: 'poslat vseh nahui', category: 'Work'}
    ],
    categories: [{id: nanoid(), name: 'Home'}, {id: nanoid(), name: 'Work'}]
  };

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
})

export const state = (state) => state.taskReducer

export default taskSlice.reducer