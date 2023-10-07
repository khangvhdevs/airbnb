import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { useAppDispatch } from "store"
import { getRoomByIdThunk } from "store/quanLyPhong/thunk"
import { RoomOverview } from "./RoomOverview"
import { getLocationByIdThunk } from "store/quanLyViTri/thunk"
import RoomDetails from "./RoomDetails"
import RoomFeedback from "./RoomFeedback"
import { getCommentsByRoomIdThunk } from "store/quanLyBinhLuan/thunk"

export const RoomDetailsTemplate = () => {
    const params = useParams()
    const { id } = params
    const [searchParams] = useSearchParams();
    const searchQuery = Object.fromEntries(searchParams);
    const maViTri = searchQuery.maViTri;
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getRoomByIdThunk(Number(id))).unwrap()
        dispatch(getLocationByIdThunk(Number(maViTri))).unwrap()
        dispatch(getCommentsByRoomIdThunk(Number(id))).unwrap()
    }, [id, maViTri])
    return (
        <div className="section_container">
            <RoomOverview maViTri={maViTri} />
            <RoomDetails />
            <RoomFeedback />
        </div>
    )
}

export default RoomDetailsTemplate