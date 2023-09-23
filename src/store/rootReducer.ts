import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyViTriReducer } from "./quanLyViTri/slice";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyViTri: quanLyViTriReducer,
})