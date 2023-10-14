import { apiInstance } from "constant"
import { RoomSchemaType } from "schema/RoomSchema"
import { CityIdType, RoomsByLocation, UploadHinhPhong } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_PHONG_API
})

export const quanLyPhongServices = {
    getRooms: () => api.get<ApiResponse<RoomsByLocation[]>>(''),
    getRoomsByLocation: (params: CityIdType) => api.get<ApiResponse<RoomsByLocation[]>>('/lay-phong-theo-vi-tri', {
        params
    }),
    getRoomsById: (id: number) => api.get<ApiResponse<RoomsByLocation>>(`/${id}`),
    postRoom: (params: RoomSchemaType) => api.post<ApiResponse<RoomsByLocation>>('', params),
    uploadRoomImage: (params: UploadHinhPhong) => api.post<ApiResponse<RoomsByLocation>>(`/upload-hinh-phong?maPhong=${params.maPhong}`, params.formData),
    deleteRoom: (id: number) => api.delete<ApiResponse<RoomsByLocation>>(`/${id}`),
}