import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store/rootStore';


export interface User{
    id?:number;
    username:string;
    avatar:string;
}


const initialState:User = {
    username:"",
    avatar:""
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<User>) => {
            state.avatar = action.payload.avatar;
            state.username = action.payload.username;
            state.id = action.payload.id;
        },
        logOut: (state) => {
            state = initialState;
        }
    }
}) 


export const {setUser, logOut} = userSlice.actions;

export const selectUser = (state:RootState) => state;
export default userSlice.reducer;