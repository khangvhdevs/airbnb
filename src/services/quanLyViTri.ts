import { apiInstance } from "constant";
import { PhanTrangParams, PhanTrangViTri, ViTri } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_VI_TRI_API
})

export const quanLyViTriServices = {
    getLocationPagination: (params: PhanTrangParams) => api.get<ApiResponse<PhanTrangViTri>>('/phan-trang-tim-kiem', {
        params
    }),
    getLocationById: (params: number) => api.get<ApiResponse<ViTri>>(`/${params}`),
}