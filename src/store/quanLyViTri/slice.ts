import { createSlice } from "@reduxjs/toolkit"
import { PhanTrangViTri, ViTri } from "types"
import { getLocationByIdThunk, getLocationPaginationThunk } from "./thunk"

type quanLyViTriIntitialState = {
    LocationPagination?: PhanTrangViTri,
    LocationById?: ViTri,
}

const initialState: quanLyViTriIntitialState = {

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
    },
})
export const { actions: quanLyViTriActions, reducer: quanLyViTriReducer } = quanLyViTriSlice