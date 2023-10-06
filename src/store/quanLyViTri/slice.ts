import { createSlice } from "@reduxjs/toolkit"
import { PhanTrangViTri, ViTri } from "types/quanLyViTri"
import { getLocationAtHeaderThunk, getLocationPaginationThunk } from "./thunk"

type quanLyViTriIntitialState = {
    LocationPagination?: PhanTrangViTri,
    LocationHeader?: ViTri[]
}

const initialState: quanLyViTriIntitialState = {
    // LocationHeader: [{
    //     id: 0,
    //     tenViTri: "" ,
    //     tinhThanh: "",
    //     quocGia: "",
    //     hinhAnh: "",
    // }]
}

const quanLyViTriSlice = createSlice({
    name: "quanLyViTri",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getLocationPaginationThunk.fulfilled, (state, { payload }) => {
            state.LocationPagination = payload
            console.log(payload);
        })
        .addCase(getLocationAtHeaderThunk.fulfilled, (state, { payload })=>{
            console.log("payloadHeader", payload);
            state.LocationHeader = payload
        })
    },
})
export const { actions: quanLyViTriActions, reducer: quanLyViTriReducer } = quanLyViTriSlice