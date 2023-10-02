import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyViTriServices } from "services";
import { PhanTrangParams } from "types";

export const getLocationPaginationThunk = createAsyncThunk(
    'quanLyViTri/getLocationPaginationThunk', async (params: PhanTrangParams, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationPagination(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getLocationByIdThunk = createAsyncThunk(
    'quanLyViTri/getLocationByIdThunk', async (params: number, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationById(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)