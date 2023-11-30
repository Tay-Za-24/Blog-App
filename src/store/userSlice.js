import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : {},
    token : '',
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        addUser : (state, action) => {
            state.userInfo = action.payload
            state.token = action.payload?.access_token
        },
    }
})

export const getUser = (state) => state.user.userInfo
export const getToken = (state) => state.user.token

export const { addUser } = userSlice.actions

export default userSlice.reducer