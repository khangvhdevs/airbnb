import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyViTriServices } from "services/quanLyViTri";
import { PhanTrangType } from "types/quanLyViTri";

export const getLocationPaginationThunk = createAsyncThunk(
    'quanLyViTri/getLocationPaginationThunk', async (params: PhanTrangType, { rejectWithValue }) => {
        try {
            const data = await quanLyViTriServices.getLocationPagination(params)
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const getLocationAtHeaderThunk = createAsyncThunk(
    'quanLyViTri/getLocationAtHeaderThunk', async ( _,{rejectWithValue} ) => {
        try {
            const data = await quanLyViTriServices.getLocationAtHeader()
            return data.data.content
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)