import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/postServices";

const initialState = {
    status: "pending",
    list: [],
    filter: null, 
  };
  
  export const getPostList = createAsyncThunk('post/getPosts', async (payload, thunkApi) => {
    const res = await postService.getAllPosts();
    return res.data;
  });
  
  const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      reversePost: (state) => {
        state.list = state.list.reverse();
      },
      setFilter: (state, action) => {
        state.filter = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(
        getPostList.fulfilled, (state, action) => {
          state.list = action.payload;
          state.status = "Done";
        }
      );
    }
  });

  export const getAllPosts = (state) => {
    const filter = state.posts.filter;
    if (filter === null) {
      return state.posts.list;
    }
  
    const lowerCaseFilter = filter.toLowerCase();
    const filteredList = state.posts.list.filter((post) => {
      const postTitle = post.title.toLowerCase();
      return postTitle.includes(lowerCaseFilter);
    });
    return filteredList;
  };
  
  export const { reversePost, setFilter } = postSlice.actions;

export default postSlice.reducer