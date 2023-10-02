import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyViTriReducer } from "./quanLyViTri/slice";
import { quanLyPhongReducer } from "./quanLyPhong/slice";

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyViTri: quanLyViTriReducer,
    quanLyPhong: quanLyPhongReducer,
})