import { apiInstance } from "constant";
import { LoginSchemaType } from "schema";
import { Content, User } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyNguoiDungServices = {
    login: (payload: LoginSchemaType) => api.post<ApiResponse<Content<User>>>('/signin',payload),
}