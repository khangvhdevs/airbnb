import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhongServices } from "services";
import { CityIdType } from "types";

export const getRoomsThunk = createAsyncThunk(
    'quanLyPhong/getRoomsThunk', async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRooms()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getRoomsByLocationThunk = createAsyncThunk(
    'quanLyPhong/getRoomsByLocationThunk', async (params: CityIdType, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRoomsByLocation(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getRoomByIdThunk = createAsyncThunk(
    'quanLyPhong/getRoomByIdThunk', async (id: number, { rejectWithValue }) => {
        try {
            const data = await quanLyPhongServices.getRoomsById(id)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)