import { createSlice } from "@reduxjs/toolkit"
import { getRoomByIdThunk, getRoomsByLocationThunk } from "./thunk"
import { RoomsByLocation } from "types"

type quanLyPhongInitialState = {
    RoomsByLocationList?: RoomsByLocation[]
    Room?: RoomsByLocation
    isFetchingRoom: boolean
}

const initialState: quanLyPhongInitialState = {
    RoomsByLocationList: [],
    isFetchingRoom: false
}

const quanLyPhongSlice = createSlice({
    name: "quanLyPhong",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getRoomsByLocationThunk.fulfilled, (state, { payload }) => {
                state.RoomsByLocationList = payload
                state.isFetchingRoom = false
            })
            .addCase(getRoomsByLocationThunk.pending, (state) => {
                state.isFetchingRoom = true
            })
            .addCase(getRoomsByLocationThunk.rejected, (state) => {
                state.isFetchingRoom = false
            })
            .addCase(getRoomByIdThunk.fulfilled, (state, { payload }) => {
                state.Room = payload
            })
    },
})

export const { actions: quanLyPhongActions, reducer: quanLyPhongReducer } = quanLyPhongSlice