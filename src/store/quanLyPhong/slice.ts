import { createSlice } from "@reduxjs/toolkit"
import { getRoomByIdThunk, getRoomsByLocationThunk, getRoomsThunk } from "./thunk"
import { RoomsByLocation } from "types"

type quanLyPhongInitialState = {
    RoomsByLocationList?: RoomsByLocation[]
    Room?: RoomsByLocation
    isFetchingRoom: boolean
    currentRoom?: RoomsByLocation
}

const initialState: quanLyPhongInitialState = {
    RoomsByLocationList: [],
    isFetchingRoom: false
}

const quanLyPhongSlice = createSlice({
    name: "quanLyPhong",
    initialState,
    reducers: {
        setCurrentRoom: (state, { payload }) => {
            state.currentRoom = payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getRoomsThunk.fulfilled, (state, { payload }) => {
                state.RoomsByLocationList = payload
                state.isFetchingRoom = false
            })
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
                localStorage.setItem("currentRoomIdView", JSON.stringify(payload.id))
            })
    },
})

export const { actions: quanLyPhongActions, reducer: quanLyPhongReducer } = quanLyPhongSlice