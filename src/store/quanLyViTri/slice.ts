import { createSlice } from "@reduxjs/toolkit"
import { PhanTrangViTri } from "types/quanLyViTri"
import { getLocationPaginationThunk } from "./thunk"

type quanLyViTriIntitialState = {
    LocationPagination?: PhanTrangViTri,
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
            console.log(payload);
        })
    },
})
export const { actions: quanLyViTriActions, reducer: quanLyViTriReducer } = quanLyViTriSlice