import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingSchemaType } from "schema/BookingSchema";
import { quanLyDatPhongServices } from "services";

export const postBookingThunk = createAsyncThunk('quanLyDatPhong/postBookingThunk', async (payload: BookingSchemaType, { rejectWithValue }) => {
    try {
        const data = await quanLyDatPhongServices.postBooking(payload)
        return data.data.content
    } catch (error) {
        rejectWithValue(error)
    }
})