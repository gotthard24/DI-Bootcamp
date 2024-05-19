import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    books: [
      { id: 1, title: '1984', author: 'George Orwell', genre: 'Horror' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
      { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
      { id: 4, title: 'Moby Dick', author: 'Herman Melville', genre: 'Fantasy' },
      { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction' },
    ]
  };

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder){
        
    }
})

export const state = (state) => state.bookReducer

export default bookSlice.reducer