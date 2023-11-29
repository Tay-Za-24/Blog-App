import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/postServices";

const initialState = {
    staus : "pending",
    list :[]
}

export const getPostList = createAsyncThunk('post/getPosts', async (payload, thunkApi) => {
    const res = await postService.getAllPosts()
    return res.data
})

export const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {
        reversePost: (state) => {
          state.list = state.list.reverse();
        }
      },
    extraReducers: (builder) => {
        builder.addCase(
            getPostList.fulfilled, (state, action) => {
                state.list = action.payload
                state.staus = "Done"
            }
        );
    }
})

export const getAllPosts = (state) => state.posts.list

export const {reversePost} = postSlice.actions

export default postSlice.reducer