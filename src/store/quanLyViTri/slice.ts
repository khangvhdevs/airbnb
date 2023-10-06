import { createSlice } from "@reduxjs/toolkit"
import { getLocationAtHeaderThunk, getLocationPaginationThunk, getLocationByIdThunk } from "./thunk"
import { PhanTrangViTri, ViTri } from "types"


type quanLyViTriIntitialState = {
    LocationPagination?: PhanTrangViTri,
    LocationById?: ViTri,
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
        })
        builder.addCase(getLocationByIdThunk.fulfilled, (state, { payload }) => {
            state.LocationById = payload
        })
        .addCase(getLocationAtHeaderThunk.fulfilled, (state, { payload })=>{
            console.log("payloadHeader", payload);
            state.LocationHeader = payload
        })
    },
})
export const { actions: quanLyViTriActions, reducer: quanLyViTriReducer } = quanLyViTriSlice