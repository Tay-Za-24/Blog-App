import { configureStore, combineReducers} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postReducer from './postSlice'
import infoReducer from './infoSlice'

const reducer = combineReducers({
    user : userReducer,
    posts : postReducer,
    userData : infoReducer
})

export const store = configureStore({
    reducer,
    middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware({
        thunk : {},
        serializableCheck:false
    })
})