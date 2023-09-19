import { createSlice } from "@reduxjs/toolkit"
import { Content, User } from "types"
import { loginThunk } from "./thunk"

type QuanLyNguoiDungInitialState = {
    userLogin?: Content<User>,
    accessToken?:string,
}
const initialState:QuanLyNguoiDungInitialState = {
    userLogin: {
        user: {
            id: 0,
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            avatar: "",
            gender: true,
            role: "",
        },
        token: "",
    },
    accessToken: localStorage.getItem("accessToken")
}

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
builder.addCase(loginThunk.fulfilled, (state,{payload}) =>{
    state.userLogin = payload
    console.log("payload",payload);
    
    if(payload){
        localStorage.setItem("accessToken",payload.token)
    }
})
    }
})

export const {actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer} = quanLyNguoiDungSlice