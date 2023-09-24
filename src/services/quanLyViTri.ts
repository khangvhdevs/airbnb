import { apiInstance } from "constant";
import { PhanTrangType, PhanTrangViTri } from "types/quanLyViTri";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_VI_TRI_API
})

export const quanLyViTriServices = {
    getLocationPagination: (params: PhanTrangType) => api.get<ApiResponse<PhanTrangViTri>>('/phan-trang-tim-kiem', {
        params
    }),
}