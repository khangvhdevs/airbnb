import { createSlice } from "@reduxjs/toolkit";
import { Content, User } from "types";
import { getUserIDThunk, loginThunk, uploadAvatarThunk } from "./thunk";

type QuanLyNguoiDungInitialState = {
  userLogin?: Content<User>;
  accessToken?: string;
  getUserID?: & User;
};
const initialState: QuanLyNguoiDungInitialState = {
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
  getUserID: {
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
  // accessToken: localStorage.getItem("accessToken")
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logout: (state) => {
      state.userLogin = undefined;
      localStorage.removeItem("idUser")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.userLogin = payload;
        console.log("payload", payload);
        if (payload) {
            localStorage.setItem("idUser",String(payload?.user?.id))
            localStorage.setItem("token",payload.token)
          }
        })
      .addCase(getUserIDThunk.fulfilled, (state, { payload }) => {
        state.getUserID = payload
        console.log("payload getUserID", payload);
      })
      .addCase(uploadAvatarThunk.fulfilled, ( state, { payload } ) => {
        console.log("uploadAvatarThunk", payload);
        state.getUserID = payload
      })
  },
});

export const {
  actions: quanLyNguoiDungActions,
  reducer: quanLyNguoiDungReducer,
} = quanLyNguoiDungSlice;
