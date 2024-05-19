import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('posts/get', async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: '',
    },
    reducers: {
        addReaction: (state, action) =>{
            const {id, name} = action.payload
            const post = state.posts.find(post => post.id === id)
            if (post) {
                post.reactions[name]++;
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(getPosts.pending, (state, action) =>{
            state.status = 'pending'
        })
        .addCase(getPosts.fulfilled, (state, action) =>{
            state.status = 'success'
            const loadedPosts = action.payload.map(post =>{
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                };
                return post
            })
            state.posts = loadedPosts
        })
        .addCase(getPosts.rejected, (state, action) =>{
            state.status = 'failed'
        })
    }
})

export const state = (state) => state.postReducer

export const {addReaction} = postSlice.actions
export default postSlice.reducer