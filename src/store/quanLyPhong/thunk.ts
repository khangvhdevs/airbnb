import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhongServices } from "services";
import { CityIdType } from "types";

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