import { apiInstance } from "constant";
import { BinhLuan } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_BINH_LUAN_API
})

export const quanLyBinhLuanServices = {
    getCommentsByRoomId: (MaPhong: number) => api.get<ApiResponse<BinhLuan[]>>('/lay-binh-luan-theo-phong' + `/${MaPhong}`)
}