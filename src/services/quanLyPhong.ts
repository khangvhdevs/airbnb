import { apiInstance } from "constant"
import { CityIdType, RoomsByLocation } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHONG_API
})

export const quanLyPhongServices = {
    getRoomsByLocation: (params: CityIdType) => api.get<ApiResponse<RoomsByLocation[]>>('/lay-phong-theo-vi-tri', {
        params
    })
}