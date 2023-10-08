import { createSlice } from "@reduxjs/toolkit"

type QuanLyDatPhongInitialState = {
}

const initialState: QuanLyDatPhongInitialState = {

}

const quanLyDatPhongSlice = createSlice({
    name: "quanLyDatPhong",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        // .addCase(postBookingThunk.fulfilled, (state, {payload}) => {
        //     state.
        // })
    },
})

export const { actions: quanLyDatPhongActions, reducer: quanLyDatPhongReducer } = quanLyDatPhongSlice