import { apiInstance } from "constant";
import { LocationSchemaType } from "schema/LocationSchema";
import { Content, PhanTrangParams, PhanTrangViTri, ViTri } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_VI_TRI_API
})

export const quanLyViTriServices = {
    getLocationPagination: (params: PhanTrangParams) => api.get<ApiResponse<PhanTrangViTri>>('/phan-trang-tim-kiem', {
        params
    }),
    getLocationAtHeader: () => api.get<ApiResponse<ViTri[]>>(""),
    getLocationById: (params: number) => api.get<ApiResponse<ViTri>>(`/${params}`),
    postLocation: (payload: LocationSchemaType) => api.post<ApiResponse<Content<ViTri>>>('', payload),
}