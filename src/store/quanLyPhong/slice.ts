import { createSlice } from "@reduxjs/toolkit"
import { getRoomsByLocationThunk } from "./thunk"
import { RoomsByLocation } from "types"

type quanLyPhongInitialState = {
    RoomsByLocationList?: RoomsByLocation[]
    isFetchingRoomsByLocationList: boolean
}

const initialState: quanLyPhongInitialState = {
    RoomsByLocationList: [],
    isFetchingRoomsByLocationList: false
}

const quanLyPhongSlice = createSlice({
    name: "quanLyPhong",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getRoomsByLocationThunk.fulfilled, (state, { payload }) => {
                state.RoomsByLocationList = payload
                state.isFetchingRoomsByLocationList = false
            })
            .addCase(getRoomsByLocationThunk.pending, (state) => {
                state.isFetchingRoomsByLocationList = true
            })
            .addCase(getRoomsByLocationThunk.rejected, (state) => {
                state.isFetchingRoomsByLocationList = false
            })
    },
})

export const { actions: quanLyPhongActions, reducer: quanLyPhongReducer } = quanLyPhongSlice