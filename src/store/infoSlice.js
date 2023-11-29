import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authServices";

const initialState = {
    data : {}
  };
  
  export const getUserData = createAsyncThunk('user/getUsers', async (payload, thunkApi) => {
    const res = await authService.getUserInfo(payload);
    return res.data;
  });
  
  const infoSlice = createSlice({
    name: 'userData',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(
        getUserData.fulfilled, (state, action) => {
          state.data = action.payload;
        }
      );
    }
  });

export const getUserInfo = (state) => state.userData.data

export default infoSlice.reducer